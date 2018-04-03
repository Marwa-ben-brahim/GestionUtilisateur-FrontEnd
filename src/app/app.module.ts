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
import { NouveauUserComponent } from './nouveau-user/nouveau-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'users',component:UsersComponent},
  {path:'new-user',component:NewUserComponent},
  {path:'editUser/:id',component:EditUserComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}

];
@NgModule ({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    NewUserComponent,
    NouveauUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),HttpModule,FormsModule
  ],
  providers: [UsersServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
