import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSubject } from '../class/appSubject';
import { AppObserver } from '../class/appObserver';

@Injectable()
export class PageNavigationService implements AppSubject {
  private _page: string;
  private url: string;
  observers: AppObserver[];
  containerSliderTriggered = false;

  subscribe(observer: AppObserver) {
    this.observers.push(observer);
  }

  notifyAll() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  constructor(
    private router: Router
  ) {
    this.observers = [];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  switchPage(page: string) {
    if (this.url.includes(page)) {

    } else {
      this.navigateToPage(page);
    }
    this.url = page;
  }

  navigateToPage(page: string) {
    this.activateContentSlideAnimation();
    setTimeout(() => {
      if (page === 'home') {
        this.router.navigate(['/home']);
      } else if (page === 'what-we-offer') {
        this.router.navigate(['/what-we-offer']);
      } else if (page === 'about') {
        this.router.navigate(['/about']);
      } else if (page === 'contact') {
        this.router.navigate(['/contact']);
      }
    }, 900);
  }

  activateContentSlideAnimation() {
    this.containerSliderTriggered = true;
    this.notifyAll();
    setTimeout(() => {
      this.containerSliderTriggered = false;
      this.notifyAll();
    }, 2000);
  }

}
