import { Component, OnInit, HostBinding } from '@angular/core';
import {
  contentLeftSlideAnimation,
  contentRightSlideAnimation
} from '../../animations';
import { NEWSARTICLE } from '../../class/NewsArticle';
import { newsArticle } from '../../data/news-articles';
import { TEAMMEMBER } from '../../class/TeamMember';
import { teamMembers } from '../../data/team-members';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    contentLeftSlideAnimation,
    contentRightSlideAnimation
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';
  contentSliderTriggered = false;
  newsArticles: NEWSARTICLE[] = newsArticle;
  teamMembers = teamMembers;
  isContainer1Shown = true;
  isContainer2Shown = false;
  isContainer3Shown = false;
  constructor(
    private meta: Meta,
    private router: Router,
    private scrollService: ScrollService
  ) {
    this.scrollService.subscribe(this);
    this.setupMetaTag();
  }
  setupMetaTag() {
    this.meta.addTag({
      name: 'About',
      // tslint:disable-next-line:max-line-length
      content: 'Modulr Tech is a Brisbane based data solutions company. Our mission is to empower individuals in making faster and more insight-driven decisions throughout their everyday operations by utilising undervalued data.'
    });
  }

  update() {
    const scrollPosition = this.scrollService.scrollPosition;
    this.initContentAnimation(scrollPosition);
  }

  initContentAnimation(scrollPosition: number) {
    if (scrollPosition >= 198 && this.isContainer2Shown === false) {
      this.isContainer2Shown = true;
    } else if (scrollPosition >= 1435 && this.isContainer3Shown === false) {
      this.isContainer3Shown = true;
    }
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
