import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import { AppObserver } from '../../class/appObserver';
import { fadeAnimation, nextPagePromptAnimation } from '../../animations';

@Component({
  selector: 'app-next-page-prompt',
  templateUrl: './next-page-prompt.component.html',
  styleUrls: ['./next-page-prompt.component.scss'],
  animations: [
    fadeAnimation,
    nextPagePromptAnimation
  ]
})
export class NextPagePromptComponent implements OnInit, AppObserver {
  isOverlayed = false;
  containerState = 'shrink';
  currentPage: string;
  nextPageTitle = 'What We Offer';
  totalContainerHeight: number;

  constructor(
    private router: Router,
    private scrollService: ScrollService
  ) {
    this.currentPage = this.router.url;
    this.changePageTitle();
    this.scrollService.subscribe(this);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPage = this.router.url;
        this.changePageTitle();
      }
    });
  }

  update() {
    this.totalContainerHeight = this.getTotalContainerHeight(this.currentPage) - 886;
    this.applyOverlay(this.scrollService.scrollPosition);
    this.expandContainer(this.scrollService.scrollPosition);
  }

  getTotalContainerHeight(url): number {
    let totalHeight: number;
    let container: HTMLElement;
    if (url === '/what-we-offer') {
      container = document.getElementById('what-we-offer-content');
      totalHeight = container.offsetHeight;
    } else if (url === '/about') {
      container = document.getElementById('about-content');
      totalHeight = container.offsetHeight;
    } else if (url === '/home') {
      container = document.getElementById('landing-content');
      totalHeight = container.offsetHeight;
    }
    return totalHeight;
  }

  applyOverlay(scrollPosition: number) {
    if (scrollPosition > this.totalContainerHeight - 85) {
      this.isOverlayed = true;
    } else  {
      this.isOverlayed = false;
    }
  }

  expandContainer(scrollPosition: number) {
    if (scrollPosition > this.totalContainerHeight - 50) {
      this.containerState = 'expand';
    } else  {
      this.containerState = 'shrink';
    }
  }

  ngOnInit() {
    this.changePageTitle();
  }

  changePageTitle() {
    if (this.currentPage === '/home') {
      this.nextPageTitle = 'What We Offer';
    } else if (this.currentPage === '/what-we-offer') {
      this.nextPageTitle = 'About';
    } else if (this.currentPage === '/about') {
      this.nextPageTitle = 'Contact Us';
    }
  }

  navigateToNextPage() {
    if (this.currentPage === '/home') {
      this.router.navigate(['/what-we-offer']);
    } else if (this.currentPage === '/what-we-offer') {
      this.router.navigate(['/about']);
    } else if (this.currentPage === '/about') {
      this.router.navigate(['/contact']);
    }
  }

}
