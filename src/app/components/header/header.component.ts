import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { slideInDownAnimation, menuStaggerAnimation, fadeAnimation } from '../../animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('activeHeader', [
      state('one', style({
        transform: 'translateX(0%)'
      })),
      state('two', style({
        transform: 'translateX(100%)'
      })),
      state('three', style({
        transform: 'translateX(200%)'
      })),
      state('four', style({
        transform: 'translateX(300%)'
      })),
      state('five', style({
        transform: 'translateX(400%)'
      })),
      state('six', style({
        transform: 'translateX(500%)'
      })),
      transition('* => *', animate('400ms ease-in-out'))
    ]),
    slideInDownAnimation,
    menuStaggerAnimation,
    fadeAnimation
  ]
})
export class HeaderComponent implements OnInit {

  activeHeader = 'one';
  activeText = 'home';
  isDropdown = false;
  isModalShown = false;
  menu = false;
  needFilter = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    const url = this.router.url;
    this.navigationTabStyling(url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const page = event.url;
        this.toggleMenu();
        this.navigationTabStyling(page);
        this.menu = false;
      }
    });
  }

  navigationTabStyling(url: string) {
    this.needFilter = false;
    if (url === '/home') {
      setTimeout(() => {
        this.needFilter = true;
      }, 2600);
    } else if (url === '/what-we-offer' || url === '/about' || url === '/enquiry') {
      this.needFilter = true;
    } else {
      this.needFilter = false;
    }
  }

  toggleMenu() {
    this.menu = !this.menu;
  }
}
