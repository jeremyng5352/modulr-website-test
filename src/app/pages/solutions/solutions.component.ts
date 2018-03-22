import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
  animations: [fadeAnimation]
})
export class SolutionsComponent implements OnInit {
  @HostBinding('@fadeAnimation') routeAnimation = true;
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
