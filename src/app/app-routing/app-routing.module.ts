import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppCustomPreloader } from '../app-custom-preloader';

import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ContactComponent } from '../pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  // { path: '', redirectTo: '/welcome/landingpage', pathMatch: 'full' },
  {
    path: 'welcome', component: WelcomeComponent,
    children: [
      //   { path: 'landingpage', component: PageLandingComponent },
      //   { path: 'solutionpage', component: PageSolutionComponent, },
      //   { path: 'presspage', component: PagePressComponent, data: { preload: true } },
      //   { path: 'aboutpage', component: PageAboutComponent, data: { preload: true } },
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


