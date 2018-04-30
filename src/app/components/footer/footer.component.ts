import { Component, OnInit } from '@angular/core';
import { newsletterSlideInAnimation } from '../../animations';
import { PageNavigationService } from '../../services/page-navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    newsletterSlideInAnimation
  ]
})
export class FooterComponent implements OnInit {
  isNewsletterShown = false;
  constructor(
    private pageNavigationService: PageNavigationService
  ) { }

  ngOnInit() {
  }

  showNewsletter() {
    this.isNewsletterShown = true;
  }

  hideNewsletter() {
    this.isNewsletterShown = false;
  }

  switchPage(page: string) {
    this.pageNavigationService.switchPage(page);
  }
}
