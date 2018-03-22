import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { slideInDownAnimation } from '../../animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('activeHeader', [
      state('one', style({
        transform: 'translateX(0%)'
      })),
      state('two', style({
        transform: 'translateX(100%)'
      })),
      state('three', style({
        transform: 'translateX(200%)'
      })),
      state('four', style({
        transform: 'translateX(300%)'
      })),
      state('five', style({
        transform: 'translateX(400%)'
      })),
      state('six', style({
        transform: 'translateX(500%)'
      })),
      transition('* => *', animate('400ms ease-in-out'))
    ]),
    slideInDownAnimation
  ]
})
export class HeaderComponent implements OnInit {
  @Input()
  isShow = true;

  activeHeader = 'one';
  activeText = 'home';
  isDropdown = false;
  isModalShown = false;
  menu = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const url = this.router.url.slice(9);
    this.goTo(url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const page = event.url.slice(9);
        this.goTo(page);
      }
    });
  }

  goTo(page: string) {
    this.activeText = page;
    if (this.activeText === '') {
      this.activeText = 'homepage';
    }
    switch (this.activeText) {
      case 'homepage':
        this.activeHeader = 'one';
        break;
      case 'solutionpage':
        this.activeHeader = 'two';
        break;
      case 'aboutpage':
        this.activeHeader = 'three';
        break;
      case 'presspage':
        this.activeHeader = 'four';
        break;
      case 'contactpage':
        this.activeHeader = 'six';
        break;
      default:
        this.activeHeader = 'one';
    }
  }

  toggleMenu() {
    this.menu = !this.menu;
  }
}
