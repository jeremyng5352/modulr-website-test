import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppCustomPreloader } from '../app-custom-preloader';

import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { PressComponent } from '../pages/press/press.component';
import { AboutComponent } from '../pages/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  // { path: '', redirectTo: '/welcome/landingpage', pathMatch: 'full' },
  {
    path: 'welcome', component: WelcomeComponent,
    children: [
      //   { path: 'landingpage', component: PageLandingComponent },
      //   { path: 'solutionpage', component: PageSolutionComponent, },
        { path: 'aboutpage', component: AboutComponent, data: { preload: true } },
      { path: 'presspage', component: PressComponent, data: { preload: true } },
      { path: 'contactpage', component: ContactComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }


