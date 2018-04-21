import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-scroll-progress-bar',
  templateUrl: './scroll-progress-bar.component.html',
  styleUrls: ['./scroll-progress-bar.component.scss']
})
export class ScrollProgressBarComponent implements OnInit {
  @Input() scrollProgress: number;

  currentUrl;
  constructor(
    private router: Router
  ) {
    this.currentUrl = this.router.url.slice(9);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url.slice(9);
      }
    });
  }

  ngOnInit() {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.redrawProgressBar(this.scrollProgress);
  }

  redrawProgressBar(scrollProgress: number) {
    const progressBar = document.getElementById('scroll-progress-bar-container');
    const totalContainerHeight = this.getTotalContainerHeight(this.currentUrl) - 886;
    const progressBarWidth = (scrollProgress / totalContainerHeight) * 100;
    progressBar.style.width = `${progressBarWidth}vw`;
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
