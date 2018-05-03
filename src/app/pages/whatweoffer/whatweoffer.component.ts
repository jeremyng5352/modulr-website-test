import { Component, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core';
import {
  fadeAnimation,
  contentLeftSlideAnimation,
  contentRightSlideAnimation
} from '../../animations';
import { WHATWEOFFERCONTENT } from '../../class/WhatWeOfferContent';
import { whatWeOfferContent } from '../../data/what-we-offer-contents';
import { Meta } from '@angular/platform-browser';
import { ScrollService } from '../../services/scroll.service';
@Component({
  selector: 'app-whatweoffer',
  templateUrl: './whatweoffer.component.html',
  styleUrls: ['./whatweoffer.component.scss'],
  animations: [
    fadeAnimation,
    contentLeftSlideAnimation,
    contentRightSlideAnimation,
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
  isContainer1Shown = true;
  isContainer2Shown = false;
  isContainer3Shown = false;
  isContainer4Shown = false;
  isContainer5Shown = false;
  constructor(
    private meta: Meta,
    private scrollService: ScrollService
  ) {
    this.section3Contents = this.whatWeOfferContent[0];
    this.scrollService.subscribe(this);
    this.setupMetaTag();
  }

  update() {
    const scrollPosition = this.scrollService.scrollPosition;
    this.initContentAnimation(scrollPosition);
  }

  initContentAnimation(scrollPosition: number) {
    if (scrollPosition >= 250 && this.isContainer2Shown === false) {
      this.isContainer2Shown = true;
    } else if (scrollPosition >= 2700 && this.isContainer3Shown === false) {
      this.isContainer3Shown = true;
    } else if (scrollPosition >= 3300 && this.isContainer4Shown === false) {
      this.isContainer4Shown = true;
    } else if (scrollPosition >= 3500 && this.isContainer5Shown === false) {
      this.isContainer5Shown = true;
    }
  }

  setupMetaTag() {
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
