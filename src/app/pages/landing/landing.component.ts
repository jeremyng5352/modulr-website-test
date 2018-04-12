import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import * as Hammer from 'hammerjs';
import {titleStaggerAnimation, titleHighlightAnimation } from '../../animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    titleStaggerAnimation,
    titleHighlightAnimation,
    trigger('boxState', [
      state('middle', style({
        display: 'box',
        transform: 'translateY(0%)'
      })),
      state('top', style({
        transform: 'translateY(-100%)',
        display: 'none',
        opacity: 0
      })),
      state('bottom', style({
        transform: 'translateY(100%)',
        display: 'none',
        opacity: 0
      })),
      state('none', style({
        display: 'none',
        transform: 'translateX(100%)'
      })),
      transition('middle => top', animate('400ms ease-out')),
      transition('middle => bottom', animate('400ms ease-out')),
      transition('bottom => middle', animate('400ms ease-out')),
      transition('top => middle', animate('400ms ease-out'))
    ])
  ]
})
export class LandingComponent implements OnInit {

  isPageSix = false;
  footerTitle = 'What we do';
  // For the pagination
  states = {
    box1: 'middle',
    box2: 'bottom',
    box3: 'bottom',
    box4: 'bottom',
    box5: 'bottom',
    box6: 'bottom'
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
        this.controlledScroll('up');
      } else {
        this.controlledScroll('down');
      }
    });
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
  }

  controlledScroll(direction: string) {
    if (!this.isScrolling) {
      if (direction === 'up') {
        this.scrollUp();
        this.disableScrolling();
      } else {
        this.scrollDown();
        this.disableScrolling();
      }
    }
  }

  scrollUp() {
    this.switchBoxStateInIncrement();
    this.switchFooterTitle();
    this.switchPaginationTitle();
  }

  switchBoxStateInIncrement() {
    if (this.currentPage !== 6) {
      const boxID = 'box' + this.currentPage;
      const otherBoxID = 'box' + (this.currentPage + 1);
      this.states[boxID] = 'middle';
      this.states[boxID] = 'top';
      this.states[otherBoxID] = 'bottom';
      this.states[otherBoxID] = 'middle';
      this.currentPage += 1;
    }
  }

  switchFooterTitle() {
    if (this.currentPage === 1) {
      this.footerTitle = 'What we do';
    } else if (this.currentPage === 2) {
      this.footerTitle = 'Our Vision';
    } else if (this.currentPage === 3) {
      this.footerTitle = 'OUR SOLUTIONS';
      // this.footerTitle = 'DRILLR INSIGHTS';
    } else if (this.currentPage === 4) {
      this.footerTitle = 'Press';
    } else if (this.currentPage === 5) {
      this.footerTitle = 'Our supporters';
    } else {
      this.footerTitle = 'Stay in the loop';
    }
  }

  switchPaginationTitle() {
    if (this.currentPage !== 6) {
      this.isPageSix = false;
    } else {
      this.isPageSix = true;
    }
  }

  disableScrolling() {
    this.isScrolling = true;
    setTimeout(() => {
      this.isScrolling = false;
    }, 400);
  }

  scrollDown() {
    this.switchBoxStateInDecrement();
    this.switchFooterTitle();
    this.switchPaginationTitle();
  }

  switchBoxStateInDecrement() {
    if (this.currentPage !== 1) {
      const boxID = 'box' + this.currentPage;
      const otherBoxID = 'box' + (this.currentPage - 1);
      this.states[boxID] = 'middle';
      this.states[boxID] = 'bottom';
      this.states[otherBoxID] = 'top';
      this.states[otherBoxID] = 'middle';
      this.currentPage -= 1;
    }
  }

}
