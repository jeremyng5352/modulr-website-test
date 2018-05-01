import { Component, OnInit, HostListener, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { ScrollService } from './services/scroll.service';
import { PageNavigationService } from './services/page-navigation.service';
import { mainPageAnimation } from './animations';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        display: 'flex'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ]),
    mainPageAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  state = 'show';
  container;
  scrollBarPosition: number;
  containerSliderTriggered: boolean;

  @HostListener('window:keyup', ['$event'])

  update() {
    this.containerSliderTriggered = this.pageNavigationService.containerSliderTriggered;
  }

  constructor(
    private loaderService: LoaderService,
    private scrollService: ScrollService,
    private pageNavigationService: PageNavigationService,
    private router: Router
  ) {
    this.pageNavigationService.subscribe(this);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.initScrollToTop();
        this.scrollEvent();
        this.scrollService.scrollPosition = window.scrollY;
      }
    });
  }

  initScrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  scrollEvent() {
    this.scrollBarPosition = window.scrollY;
    this.scrollService.scrollPosition = this.scrollBarPosition;
    if (this.scrollBarPosition <= 50) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }

  ngOnInit() {
    this.loaderService.display(true);
    this.initScrollToTop();
    // this.setupHammer();
  }

  // setupHammer() {
  //   const myElement = document.getElementsByClassName('main-container')[0];
  //   const myOptions = {};
  //   const hammertime = new Hammer(myElement, { myOptions });
  //   hammertime.on('pan', (ev) => {
  //     this.scrollEvent();
  //   });
  //   hammertime.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
  // }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    this.loaderService.display(false);
  }

}



