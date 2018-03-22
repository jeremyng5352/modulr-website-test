import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeAnimation } from '../../animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeAnimation]
})
export class AboutComponent implements OnInit {
  @HostBinding('@fadeAnimation') routeAnimation = true;
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
