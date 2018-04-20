import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppCustomPreloader } from '../app-custom-preloader';

import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutComponent } from '../pages/about/about.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { WhatweofferComponent } from '../pages/whatweoffer/whatweoffer.component';
import { EnquiryComponent } from '../pages/enquiry/enquiry.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome/landingpage', pathMatch: 'full' },
  {
    path: 'welcome', component: WelcomeComponent,
    children: [
      { path: 'landingpage', component: LandingComponent },
      { path: 'aboutpage', component: AboutComponent, data: { preload: true } },
      { path: 'contactpage', component: ContactComponent },
      { path: 'whatweofferpage', component: WhatweofferComponent },
      { path: 'enquirypage', component: EnquiryComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }


