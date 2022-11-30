import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { CarousalComponent } from './carousal/carousal.component';
import { NavMainComponent } from './nav-main/nav-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    CarousalComponent,
    NavMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
