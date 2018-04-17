import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import * as Hammer from 'hammerjs';
import { titleHighlightAnimation, containerSlideUpAnimation } from '../../animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    containerSlideUpAnimation,
    titleHighlightAnimation
  ]
})
export class LandingComponent implements OnInit {

  states = {
    container1: 'middle',
    container2: 'bottom',
  };

  currentPage = 1;
  // Main 3D Variables
  container;
  width: number;
  height: number;
  // 3D components
  scene;
  camera;
  renderer;
  sunLight;
  model;
  isScrolling = false;

  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';

  constructor(
    private router: Router
  ) {
    setTimeout(() => {
      this.slideContainerUp();
    }, 2000);
  }

  ngOnInit() {
    this.setupHammer();
  }

  setupHammer() {
    const myElement = document.getElementsByClassName('landing-main-container')[0];
    const myOptions = {};
    const hammertime = new Hammer(myElement, { myOptions });
    hammertime.on('pan', (ev) => {
      console.log(ev.additionalEvent);
      const direction = ev.additionalEvent;
      if (direction === 'panup') {
        this.slideContainerUp();
      }
    });
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
  }

  slideContainerUp() {
    const containerID = 'container' + 1;
    const otherContainerID = 'container' + 2;
    this.states[containerID] = 'middle';
    this.states[containerID] = 'top';
    this.states[otherContainerID] = 'bottom';
    this.states[otherContainerID] = 'middle';
  }

}
