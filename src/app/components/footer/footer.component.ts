import { Component, OnInit } from '@angular/core';
import { newsletterSlideInAnimation } from '../../animations';

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
  constructor() { }

  ngOnInit() {
  }

  showNewsletter() {
    this.isNewsletterShown = true;
  }

  hideNewsletter() {
    this.isNewsletterShown = false;
  }
}
