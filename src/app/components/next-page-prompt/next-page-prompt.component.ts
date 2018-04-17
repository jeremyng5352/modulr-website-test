import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-next-page-prompt',
  templateUrl: './next-page-prompt.component.html',
  styleUrls: ['./next-page-prompt.component.scss']
})
export class NextPagePromptComponent implements OnInit {

  currentPage: string;
  nextPageTitle = 'What We Offer';

  constructor(
    private router: Router
  ) {
    this.currentPage = this.router.url.slice(9);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.changePageTitle();
      }
    });
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
}
