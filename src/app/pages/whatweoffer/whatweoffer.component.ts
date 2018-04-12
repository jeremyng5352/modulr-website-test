import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-whatweoffer',
  templateUrl: './whatweoffer.component.html',
  styleUrls: ['./whatweoffer.component.scss'],
  animations: [
    trigger('containerState', [
      state('top', style({
        transform: 'translateY(-100%)',
        display: 'none',
        opacity: 0
      })),
      state('middle', style({
        transform: 'translateY(0%)'
      })),
      state('bottom', style({
        transform: 'translateY(100%)',
      })),
      transition('middle => top', animate('600ms ease-in-out')),
      transition('bottom => middle', animate('600ms ease-in-out')),
    ])
  ]
})
export class WhatweofferComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';

  states = {
    container1: 'middle',
    container2: 'bottom',
  };
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.scrollUp();
    }, 2000);
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
