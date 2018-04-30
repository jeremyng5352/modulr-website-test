import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PageNavigationService } from '../../services/page-navigation.service';
import {
  slideInDownAnimation,
  menuStaggerAnimation,
  fadeAnimation,
  mainPageAnimation
} from '../../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    slideInDownAnimation,
    menuStaggerAnimation,
    fadeAnimation,
    mainPageAnimation
  ]
})
export class HeaderComponent implements OnInit {

  isDropdown = false;
  isModalShown = false;
  isHeaderShown = true;
  menu = false;
  needFilter = false;
  url: string;

  constructor(
    private router: Router,
    private pageNavigationService: PageNavigationService
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        this.toggleMenu();
        this.navigationTabStyling(this.url);
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

  switchPage(page: string) {
    this.pageNavigationService.switchPage(page);
  }

}




