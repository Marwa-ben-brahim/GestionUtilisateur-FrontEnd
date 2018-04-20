import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import {CommonModule} from "@angular/common";
import {IndexComponent} from "./index/index.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {DiplomesComponent} from "./diplomes/diplomes.component";
import {SideBarComponent} from "./side-bar/side-bar.component";


const appRoutes:Routes=[
  { path: 'dashboard',component: DashboardComponent },
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'new-user',component:NewUserComponent},
  {path:'editUser/:login',component:EditUserComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'side-bar',component:SideBarComponent},
  {path:'index',component:IndexComponent},
  {path:'diplome',component:DiplomesComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
