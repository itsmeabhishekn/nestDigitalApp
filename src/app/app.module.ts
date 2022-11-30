import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { CarousalComponent } from './carousal/carousal.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { LogoutNavComponent } from './logout-nav/logout-nav.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpAddComponent } from './emp-add/emp-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    CarousalComponent,
    NavMainComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    ViewCourseComponent,
    ViewFriendsComponent,
    LogoutNavComponent,
    EmpLoginComponent,
    EmpAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
