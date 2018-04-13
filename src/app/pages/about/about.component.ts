import { Component, OnInit, HostBinding } from '@angular/core';
import { titleStaggerAnimation, containerSlideUpAnimation } from '../../animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    containerSlideUpAnimation,
  titleStaggerAnimation]
})
export class AboutComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';

  states = {
    container1: 'middle',
    container2: 'bottom',
  };
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
      this.scrollUp();
    // }, 2000);
  }

  scrollUp() {
    const containerID = 'container' + 1;
    const otherContainerID = 'container' + 2;
    this.states[containerID] = 'middle';
    this.states[containerID] = 'top';
    this.states[otherContainerID] = 'bottom';
    this.states[otherContainerID] = 'middle';
  }

}
