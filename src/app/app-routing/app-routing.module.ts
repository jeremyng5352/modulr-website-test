import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppCustomPreloader } from '../app-custom-preloader';

import { CommonModule } from '@angular/common';
import { PageNavigationComponent } from '../page-navigation/page-navigation.component';
import { PageAboutComponent } from '../page-about/page-about.component';
import { PageContactComponent } from '../page-contact/page-contact.component';
import { PagePressComponent } from '../page-press/page-press.component';
import { PageLandingComponent } from 'app/page-landing/page-landing.component';
import { PageSolutionComponent } from '../page-solution/page-solution.component';
import { PageWelcomeComponent } from '../page-welcome/page-welcome.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome/landingpage', pathMatch: 'full' },
  {
    path: 'welcome', component: PageWelcomeComponent,
    children: [
      { path: 'landingpage', component: PageLandingComponent },
      { path: 'solutionpage', component: PageSolutionComponent, },
      { path: 'presspage', component: PagePressComponent, data: { preload: true } },
      { path: 'aboutpage', component: PageAboutComponent, data: { preload: true } },
      { path: 'contactpage', component: PageContactComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }


