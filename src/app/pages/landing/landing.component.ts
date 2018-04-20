import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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

  height: number;
  isScrolling = false;

  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';

  constructor(
    private router: Router
  ) {
    // setTimeout(() => {
      this.slideContainerUp();
    // }, 2000);
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
