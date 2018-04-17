import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { Router, NavigationEnd } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

// Variables for threejs controller
let cursorX, cursorY;
// For animate purpose
let component;
let lastMove = Date.now();
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        display: 'flex'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  state = 'show';
  container;
  width: number;
  height: number;
  // 3D components
  scene;
  camera;
  renderer;
  sunLight;
  model;

  @HostListener('window:resize', ['$event'])
  @HostListener('mousemove', ['$event'])
  @HostListener('window:keyup', ['$event'])

  onResize(event) {
    this.setup3DVariables();
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  onMouseMove(event: MouseEvent): void {
    if (Date.now() - lastMove < 17) { // 32 frames a second
      return;
    } else {
      lastMove = Date.now();
    }
    cursorX = (event.clientX / window.innerWidth) * 2 - 1;
    cursorY = (event.clientY / window.innerHeight) * -2 + 1;
    this.lookCursor(this.model, cursorX, cursorY);
  }

  scrollEvent() {
    const scrollBarPosition = document.body.scrollTop;
    if (scrollBarPosition <= 50) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }

  constructor(
    private loaderService: LoaderService,
    private router: Router
  ) {
    component = this;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        document.body.scrollTop = 0;
        this.scrollEvent();
      }
    });
  }

  ngOnInit() {
    this.loaderService.display(true);
    this.initScrollToTop();
    this.initLoadingManager();
    this.setup3DVariables();
    this.setupMajorComponentsFor3DScene();
    this.render();
  }

  initScrollToTop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    this.loaderService.display(false);
  }

  initLoadingManager() {
    this.setupOnStartCallback();
    this.setupOnLoadCallback();
    this.setupOnProgressCallback();
    this.setupOnErrorCallback();
  }

  setupOnStartCallback() {
    THREE.DefaultLoadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
      console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    };
  }

  setupOnLoadCallback() {
    THREE.DefaultLoadingManager.onLoad = () => {
      console.log('Loading Complete!');
      initAnimation();
    };
  }

  setupOnProgressCallback() {
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
    };
  }

  setupOnErrorCallback() {
    THREE.DefaultLoadingManager.onError = (url) => {
      alert(`There was an error loading ${url}`);
    };
  }

  setup3DVariables() {
    this.container = document.getElementById('modulr-logo-background');
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
  }

  setupMajorComponentsFor3DScene() {
    this.scene = new THREE.Scene;
    this.setupCamera();
    this.setupRenderer();
    this.setupLights();
    this.load3DObjects();
  }

  // Setup the basicthis.camera
  setupCamera() {
    const fieldOfView = 60;
    const aspectRatio = this.width / this.height;
    const nearPlane = 1;
    const farPlane = 1000;
    this.camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );
    this.camera.position.z = 6;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  // Setup the basicthis.renderer
  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    // this.renderer.setClearColor(0x0b0b0b, 1);
    this.renderer.setSize(this.width, this.height);
    this.container.appendChild(this.renderer.domElement);
  }

  setupLights() {
    this.sunLight = new THREE.DirectionalLight(0xfffffff, .5);
    this.sunLight.position.set(150, 350, 350);
    this.sunLight.castShadow = true;
    this.scene.add(this.sunLight);
  }

  load3DObjects() {
    const loader = new THREE.JSONLoader();
    loader.load('assets/modulr.js', (geometry, materials) => {
      this.setupModulrLogo(geometry, materials);
      initAnimation();
    });
  }

  setupModulrLogo(geometry, materials) {
    const material = materials[0];
    this.model = new THREE.Mesh(geometry, material);
    this.model.name = 'modulr';
    this.model.scale.set(0.4, 0.4, 0.4);
    this.model.position.set(0, 0, 0);
    this.model.rotation.set(0, 0, 0);
    this.scene.add(this.model);
  }

  render() {
    TWEEN.update();
    this.renderer.render(this.scene, this.camera);
  }

  lookCursor(model, x, y) {
    // mouseMove event
    const mouse = new THREE.Vector3();
    mouse.x = x;
    mouse.y = y;
    mouse.z = 2;
    // var tween = new TWEEN.Tween(object.lookAt( mouse),600).start();

    // backup original rotation
    if (model) {
      const position = new THREE.Euler().copy(model.rotation);

      // final rotation (with lookAt)
      model.lookAt(mouse);
      const target = new THREE.Euler().copy(model.rotation);

      // revert to original rotation
      model.rotation.set(position);

      // Tween
      const tween = new TWEEN.Tween(position).to(target, 1000);
      tween.easing(TWEEN.Easing.Exponential.Out);
      tween.onUpdate(() => {
        model.rotation.set(position.x, position.y, position.z);
      });
      tween.start();
    }
  }
}

function initAnimation() {
  requestAnimationFrame(initAnimation);
  component.render();
}

