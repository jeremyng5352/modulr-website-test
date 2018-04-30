import { Component, OnInit, HostBinding } from '@angular/core';
import {
  contentLeftSlideAnimation,
  contentRightSlideAnimation,
  titleHighlightAnimation
} from '../../animations';
import { NEWSARTICLE } from '../../class/NewsArticle';
import { newsArticle } from '../../data/news-articles';
import { TEAMMEMBER } from '../../class/TeamMember';
import { teamMembers } from '../../data/team-members';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    contentLeftSlideAnimation,
    contentRightSlideAnimation,
    titleHighlightAnimation
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';
  contentSliderTriggered = false;
  newsArticles: NEWSARTICLE[] = newsArticle;
  teamMembers = teamMembers;
  states = {
    container1: 'middle',
    container2: 'bottom',
  };
  constructor(
    private meta: Meta,
    private router: Router
  ) {
    this.meta.addTag({
      name: 'About',
      // tslint:disable-next-line:max-line-length
      content: 'Modulr Tech is a Brisbane based data solutions company. Our mission is to empower individuals in making faster and more insight-driven decisions throughout their everyday operations by utilising undervalued data.'
    });
  }

  ngOnInit() {
  }

  switchTeamMemberContent(name: string) {
    this.router.navigate(['/team', name]);
  }

  activateContentSlideAnimation() {
    this.contentSliderTriggered = true;
    setTimeout(() => {
      this.contentSliderTriggered = false;
    }, 1500);
  }

}
