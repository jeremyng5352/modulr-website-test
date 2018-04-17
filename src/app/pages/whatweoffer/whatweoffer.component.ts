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
  currentContentPage = 0;
  isReadMoreClicked = false;
  states = {
    container1: 'middle',
    container2: 'bottom',
  };
  constructor() {
    this.section3Contents = whatWeOfferContent[0];
  }

  ngOnInit() {
    // setTimeout(() => {
    this.slideContainerUp();
    // }, 2000);
  }

  slideContainerUp() {
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

  scrollUp() {
    if (this.currentContentPage < 2) {
      this.currentContentPage += 1;
      this.section3Contents = whatWeOfferContent[this.currentContentPage];
    }
  }

  scrollDown() {
    if (this.currentContentPage > 0) {
      this.currentContentPage -= 1;
      this.section3Contents = whatWeOfferContent[this.currentContentPage];
    }
  }
}
