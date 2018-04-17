import { Component, OnInit, HostBinding } from '@angular/core';
import { titleStaggerAnimation, containerSlideUpAnimation, fadeAnimation } from '../../animations';
import { WHATWEOFFERCONTENT } from '../../class/WhatWeOfferContent';
import { whatWeOfferContent } from '../../data/what-we-offer-contents';
@Component({
  selector: 'app-whatweoffer',
  templateUrl: './whatweoffer.component.html',
  styleUrls: ['./whatweoffer.component.scss'],
  animations: [
    titleStaggerAnimation,
    containerSlideUpAnimation,
    fadeAnimation
  ]
})
export class WhatweofferComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';
  section3Contents: WHATWEOFFERCONTENT;
  isReadMoreClicked = false;
  states = {
    container1: 'middle',
    container2: 'bottom',
  };
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
      this.scrollUp();
    // }, 2000);
    this.switchSection3Content();
  }

  scrollUp() {
    const containerID = 'container' + 1;
    const otherContainerID = 'container' + 2;
    this.states[containerID] = 'middle';
    this.states[containerID] = 'top';
    this.states[otherContainerID] = 'bottom';
    this.states[otherContainerID] = 'middle';
  }

  toggleReadButton() {
    this.isReadMoreClicked = this.isReadMoreClicked ? false : true;
  }

  switchSection3Content() {
    this.section3Contents = whatWeOfferContent[0];
  }
}
