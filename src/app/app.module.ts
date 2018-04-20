import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {UsersServices} from '../services/users.services';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DiplomesComponent } from './diplomes/diplomes.component';
import {AppRoutingModule} from "./app.routing";
import {DiplomeServices} from "../services/diplome.services";

@NgModule ({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    NewUserComponent,
    EditUserComponent,
    LoginComponent,
    DashboardComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    SideBarComponent,
    DiplomesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,FormsModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [UsersServices,DiplomeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
