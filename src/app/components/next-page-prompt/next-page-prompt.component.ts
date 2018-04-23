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
    this.currentPage = this.router.url.slice(9);
    this.scrollService.subscribe(this);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.changePageTitle();
        this.currentPage = this.router.url.slice(9);
      }
    });
  }

  update() {
    this.totalContainerHeight = this.getTotalContainerHeight(this.currentPage) - 886;
    this.applyOverlay(this.scrollService.scrollPosition);
    this.expandContainer(this.scrollService.scrollPosition);
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
    if (this.currentPage === 'landingpage') {
      this.nextPageTitle = 'What We Offer';
    } else if (this.currentPage === 'whatweofferpage') {
      this.nextPageTitle = 'About';
    } else if (this.currentPage === 'aboutpage') {
      this.nextPageTitle = 'Contact Us';
    }
  }

  navigateToNextPage() {
    if (this.currentPage === 'landingpage') {
      this.router.navigate(['/welcome/whatweofferpage']);
    } else if (this.currentPage === 'whatweofferpage') {
      this.router.navigate(['/welcome/aboutpage']);
    } else if (this.currentPage === 'aboutpage') {
      this.router.navigate(['/welcome/contactpage']);
    }
  }

  getTotalContainerHeight(url): number {
    let totalHeight: number;
    let container: HTMLElement;
    if (url === 'whatweofferpage') {
      container = document.getElementById('what-we-offer-content');
      totalHeight = container.offsetHeight;
    } else if (url === 'aboutpage') {
      container = document.getElementById('about-content');
      totalHeight = container.offsetHeight;
    } else if (url === 'landingpage') {
      container = document.getElementById('landing-content');
      totalHeight = container.offsetHeight;
    }
    return totalHeight;
  }


}
