import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeAnimation } from '../../animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeAnimation]
})
export class ContactComponent implements OnInit {
  @HostBinding('@fadeAnimation') routeAnimation = true;
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';
  constructor() { }

  ngOnInit() {
  }

}