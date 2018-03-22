import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  constructor() { }

  ngOnInit() {
  }

}
