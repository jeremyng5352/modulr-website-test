import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { titleHighlightAnimation } from '../../animations';
import { Meta } from '@angular/platform-browser';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    titleHighlightAnimation,
  ]
})
export class LandingComponent implements OnInit {
  scrollPosition: number;
  isContainer1Shown = true;
  isContainer2Shown = false;
  isContainer3Shown = false;
  isContainer4Shown = false;
  isContainer5Shown = false;

  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';

  constructor(
    private meta: Meta,
    private scrollService: ScrollService

  ) {
    this.scrollService.subscribe(this);
    this.setupMetaTag();
  }

  setupMetaTag() {
    this.meta.addTag({
      name: 'Modulr Tech: Transforming Data into Actionable Insights',
      // tslint:disable-next-line:max-line-length
      content: 'At Modulr Tech, we specialise in helping businesses make sense of their big data challenges with our advance data processing, analytics and visualisation engines. Start turning your data into actionable insights today with our digital solutions.'
    });
  }

  update() {
    const scrollPosition = this.scrollService.scrollPosition;
    this.initContentAnimation(scrollPosition);
  }

  initContentAnimation(scrollPosition: number) {
    if (scrollPosition >= 198 && this.isContainer2Shown === false) {
      this.isContainer2Shown = true;
    } else if (scrollPosition >= 688 && this.isContainer3Shown === false) {
      this.isContainer3Shown = true;
    } else if (scrollPosition >= 1100 && this.isContainer4Shown === false) {
      this.isContainer4Shown = true;
    } else if (scrollPosition >= 1500 && this.isContainer5Shown === false) {
      this.isContainer5Shown = true;
    }
  }

  ngOnInit() {
  }

}
