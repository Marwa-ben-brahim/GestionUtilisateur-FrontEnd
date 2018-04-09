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

const appRoutes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'new-user',component:NewUserComponent},
  {path:'editUser/:id',component:EditUserComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}

];
@NgModule ({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    NewUserComponent,
    EditUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),HttpModule,FormsModule
  ],
  providers: [UsersServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
