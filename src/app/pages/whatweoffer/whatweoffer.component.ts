import { Component, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core';
import {
  fadeAnimation,
  contentLeftSlideAnimation,
  contentRightSlideAnimation
} from '../../animations';
import { WHATWEOFFERCONTENT } from '../../class/WhatWeOfferContent';
import { whatWeOfferContent } from '../../data/what-we-offer-contents';
import { Meta } from '@angular/platform-browser';
import { titleHighlightAnimation } from '../../animations';
@Component({
  selector: 'app-whatweoffer',
  templateUrl: './whatweoffer.component.html',
  styleUrls: ['./whatweoffer.component.scss'],
  animations: [
    fadeAnimation,
    contentLeftSlideAnimation,
    contentRightSlideAnimation,
    titleHighlightAnimation
  ]
})
export class WhatweofferComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';
  section3Contents: WHATWEOFFERCONTENT;
  currentContentPage = 0;
  contentSliderTriggered = false;
  isReadMoreClicked = false;
  isScrolling = false;
  isDataVisualisation = false;
  isBigData = false;
  isPredictiveModel = false;
  whatWeOfferContent: WHATWEOFFERCONTENT[] = whatWeOfferContent;
  showContent = {};
  states = {
    container1: 'middle',
    container2: 'bottom',
  };
  constructor(
    private meta: Meta
  ) {
    this.section3Contents = this.whatWeOfferContent[0];
    this.meta.addTag({
      name: 'Digital Solutions',
      // tslint:disable-next-line:max-line-length
      content: 'Explore how our data processing, analytics and visualisation engine solutions can start helping you make more insight-driven decisions from enterprise big data.'
    });
  }

  ngOnInit() {
    this.whatWeOfferContent.forEach(content => {
      this.showContent[content.title] = false;
    });
  }


  toggleReadButton(title: string) {
    this.showContent[title] = !this.showContent[title];
  }

  toggleOverviewList(title: string) {
    if (title === 'data visualisation') {
      this.isDataVisualisation = !this.isDataVisualisation;
    } else if (title === 'big data') {
      this.isBigData = !this.isBigData;
    } else {
      this.isPredictiveModel = !this.isPredictiveModel;
    }
  }

  scrollUp() {
    if (this.currentContentPage !== 2 && !this.isScrolling) {
      this.contentSliderTriggered = true;
      this.incrementContainerContent();
      this.disableScrolling();
      setTimeout(() => {
        this.contentSliderTriggered = false;
      }, 1500);
    }
  }

  incrementContainerContent() {
    setTimeout(() => {
      this.currentContentPage += 1;
      this.section3Contents = whatWeOfferContent[this.currentContentPage];
    }, 1000);
  }

  disableScrolling() {
    this.isScrolling = true;
    setTimeout(() => {
      this.isScrolling = false;
    }, 1500);
  }

  scrollDown() {
    if (this.currentContentPage !== 0 && !this.isScrolling) {
      this.contentSliderTriggered = true;
      this.decrementContainerContent();
      this.disableScrolling();
      setTimeout(() => {
        this.contentSliderTriggered = false;
      }, 1500);
    }
  }

  decrementContainerContent() {
    setTimeout(() => {
      this.currentContentPage -= 1;
      this.section3Contents = whatWeOfferContent[this.currentContentPage];
    }, 1000);
  }

}
