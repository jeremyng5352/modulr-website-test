import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { teamMembers } from '../../data/team-members';
import 'rxjs/add/operator/map';
import { TEAMMEMBER } from '../../class/TeamMember';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';
  currentMember: TEAMMEMBER;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.map(params => {
      const name = params['member-name'];
      this.showCurrentMember(name);
    }).subscribe();
  }

  showCurrentMember(name: string) {
    teamMembers.forEach(member => {
      if (member.name === name) {
        this.currentMember = member;
      }
    });
  }

  backToPreviousPage() {
    this.location.back();
  }
}
