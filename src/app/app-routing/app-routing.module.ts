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
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'what-we-offer', component: WhatweofferComponent },
  { path: 'about', component: AboutComponent, data: { preload: true } },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }


