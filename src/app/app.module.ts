import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MouseWheelDirective } from './mousewheel.directive';

import { D3Service } from 'd3-ng2-service';
import { LoaderService } from './services/loader.service';
import { ScrollService } from './services/scroll.service';

import 'hammerjs';
import 'hammer-timejs';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { LandingComponent } from './pages/landing/landing.component';
import { WhatweofferComponent } from './pages/whatweoffer/whatweoffer.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { NextPagePromptComponent } from './components/next-page-prompt/next-page-prompt.component';
import { ScrollProgressBarComponent } from './components/scroll-progress-bar/scroll-progress-bar.component';
import { TeamComponent } from './pages/team/team.component';
import { PageNavigationService } from './services/page-navigation.service';
export class MyHammerConfig extends HammerGestureConfig {

}

@NgModule({
  declarations: [
    AppComponent,
    MouseWheelDirective,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    LandingComponent,
    WhatweofferComponent,
    EnquiryComponent,
    NewsletterComponent,
    NextPagePromptComponent,
    ScrollProgressBarComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    D3Service,
    LoaderService,
    ScrollService,
    PageNavigationService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
