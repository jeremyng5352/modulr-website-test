import { Component, OnInit, HostBinding } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.display') display = 'block';
  isContainer1Shown = true;
  constructor(
    private meta: Meta
  ) {
    this.setupMetaTag();
  }

  setupMetaTag() {
    this.meta.addTag({
      name: 'Contact US',
      content: 'Get in touch. Registered office level 18, 324 Queen Street, Brisbane QLD 4000.'
    });
  }

  ngOnInit() {
  }

}
