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
    slideInDownAnimation,
    menuStaggerAnimation,
    fadeAnimation
  ]
})
export class HeaderComponent implements OnInit {

  isDropdown = false;
  isModalShown = false;
  isHeaderShown = true;
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
      this.isHeaderShown = true;
    } else if (url === '/what-we-offer' || url === '/about' || url === '/enquiry') {
      this.needFilter = true;
      this.isHeaderShown = true;
    } else if (url.includes('team')) {
      this.isHeaderShown = false;
    } else {
      this.needFilter = false;
      this.isHeaderShown = true;
    }
  }

  toggleMenu() {
    this.menu = !this.menu;
  }
}
