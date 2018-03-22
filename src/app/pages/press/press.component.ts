import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
  animations: [fadeAnimation]
})
export class PressComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('@fadeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
