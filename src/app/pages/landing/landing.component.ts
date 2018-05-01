import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { titleHighlightAnimation } from '../../animations';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    titleHighlightAnimation,
  ]
})
export class LandingComponent implements OnInit {

  height: number;
  isScrolling = false;

  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';

  constructor(
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'Modulr Tech: Transforming Data into Actionable Insights',
      // tslint:disable-next-line:max-line-length
      content: 'At Modulr Tech, we specialise in helping businesses make sense of their big data challenges with our advance data processing, analytics and visualisation engines. Start turning your data into actionable insights today with our digital solutions.'
    });
  }

  ngOnInit() {
  }

}
