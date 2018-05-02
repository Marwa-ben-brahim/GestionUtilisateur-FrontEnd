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
import {EnseignantPermanentComponent} from './enseignant-permanent/enseignant-permanent.component';
import {EnseignantVacataireComponent} from './enseignant-vacataire/enseignant-vacataire.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IndexComponent} from './index/index.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {DiplomeComponent} from './diplome/diplome.component';
import {EditDiplomeComponent} from './edit-diplome/edit-diplome.component';
import {DepartementComponent} from './departement/departement.component';
import {GradeComponent} from './grade/grade.component';
import {EditDepartementComponent} from './edit-departement/edit-departement.component';
import {EditGradeComponent} from './edit-grade/edit-grade.component';
import {TypeCongeComponent} from './type-conge/type-conge.component';


const appRoutes:Routes=[
  { path: 'dashboard',component: DashboardComponent },
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'new-user',component:NewUserComponent},
  {path:'editUser/:login',component:EditUserComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'sidebar',component:SideBarComponent},
  {path:'index',component:IndexComponent},
  {path:'enseignantpermanent',component:EnseignantPermanentComponent},
  {path:'enseignantvacataire',component:EnseignantVacataireComponent},
  {path:'diplome',component:DiplomeComponent},
  {path:'departement',component:DepartementComponent},
  {path:'typeConge',component:TypeCongeComponent},
  {path:'editDepartement/:idDep',component:EditDepartementComponent},
  {path:'editDiplome/:idDip',component:EditDiplomeComponent},
  {path:'grade',component:GradeComponent},
  {path:'editGrade/:id',component:EditGradeComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}

];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent,
  LoginComponent, UsersComponent, NewUserComponent,
  EditUserComponent,NavbarComponent,SideBarComponent,IndexComponent,EnseignantPermanentComponent,DiplomeComponent]

