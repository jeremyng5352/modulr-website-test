import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MouseWheelDirective } from './mousewheel.directive';

import { D3Service } from 'd3-ng2-service';
import { LoaderService } from './services/loader.service';

import 'hammerjs';
import 'hammer-timejs';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { PressComponent } from './pages/press/press.component';
import { AboutComponent } from './pages/about/about.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { LandingComponent } from './pages/landing/landing.component';
export class MyHammerConfig extends HammerGestureConfig {

}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MouseWheelDirective,
    HeaderComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,
    PressComponent,
    AboutComponent,
    SolutionsComponent,
    LandingComponent
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
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
