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
        this.menu = false;
      }
    });
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  switchPage(page: string) {
    this.pageNavigationService.switchPage(page);
  }

}




