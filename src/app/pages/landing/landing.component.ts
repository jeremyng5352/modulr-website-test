import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { titleHighlightAnimation, containerSlideUpAnimation } from '../../animations';
import { Meta } from '@angular/platform-browser';

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

  height: number;
  isScrolling = false;

  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';

  constructor(
    private meta: Meta
  ) {
    this.slideContainerUp();
    this.meta.addTag({
      name: 'Modulr Tech: Transforming Data into Actionable Insights',
      // tslint:disable-next-line:max-line-length
      content: 'At Modulr Tech, we specialise in helping businesses make sense of their big data challenges with our advance data processing, analytics and visualisation engines. Start turning your data into actionable insights today with our digital solutions.'
    });
  }

  ngOnInit() {
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
