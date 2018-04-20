import { Component, OnInit, HostBinding } from '@angular/core';
import { titleStaggerAnimation, containerSlideUpAnimation, contentLeftSlideAnimation, contentRightSlideAnimation } from '../../animations';
import { NEWSARTICLE } from '../../class/NewsArticle';
import { newsArticle } from '../../data/news-articles';
import { TEAMMEMBER } from '../../class/TeamMember';
import { teamMembers } from '../../data/team-members';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    containerSlideUpAnimation,
    titleStaggerAnimation,
    contentLeftSlideAnimation,
    contentRightSlideAnimation
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';
  isTeamContainerShown = false;
  contentSliderTriggered = false;
  newsArticles: NEWSARTICLE[] = newsArticle;
  currentMember: TEAMMEMBER;
  teamMembers = teamMembers;
  states = {
    container1: 'middle',
    container2: 'bottom',
  };
  constructor() {
    this.currentMember = teamMembers[0];
  }

  ngOnInit() {
    setTimeout(() => {
      this.slideContainerUp();
    }, 2000);
  }

  slideContainerUp() {
    const containerID = 'container' + 1;
    const otherContainerID = 'container' + 2;
    this.states[containerID] = 'middle';
    this.states[containerID] = 'top';
    this.states[otherContainerID] = 'bottom';
    this.states[otherContainerID] = 'middle';
  }

  switchTeamMemberContent(name: string) {
    console.log(name);
    this.toggleTeamContainer();
    this.activateContentSlideAnimation();
    this.switchToMember(name);
  }

  activateContentSlideAnimation() {
    this.contentSliderTriggered = true;
    setTimeout(() => {
      this.contentSliderTriggered = false;
    }, 1500);
  }

  switchToMember(name: string) {
    let memberIndex: number;
    if (name === 'Khoi Phan') {
      memberIndex = 0;
    } else if (name === 'Julia Huynh') {
      memberIndex = 1;
    } else if (name === 'Andrea Yee') {
      memberIndex = 2;
    } else if (name === 'Jeremy Ng') {
      memberIndex = 3;
    } else if (name === 'Kimberley Lee') {
      memberIndex = 4;
    }
    setTimeout(() => {
      this.currentMember = teamMembers[memberIndex];
    }, 1000);
  }

  toggleTeamContainer() {
    this.activateContentSlideAnimation();
    setTimeout(() => {
      this.isTeamContainerShown = this.isTeamContainerShown ? false : true;
    }, 1000);
  }

}
