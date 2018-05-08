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
import { EnseignantPermanentComponent } from './enseignant-permanent/enseignant-permanent.component';
import {AppRoutingModule} from './app.routing';
import { DiplomeComponent } from './diplome/diplome.component';
import {EnfantServices} from '../services/enfant.services';
import {DiplomeServices} from '../services/diplome.services';
import { EditDiplomeComponent } from './edit-diplome/edit-diplome.component';
import { EnseignantVacataireComponent } from './enseignant-vacataire/enseignant-vacataire.component';
import { DepartementComponent } from './departement/departement.component';
import { CongeComponent } from './conge/conge.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { GradeComponent } from './grade/grade.component';
import { EditGradeComponent } from './edit-grade/edit-grade.component';
import {CorpsServices} from '../services/corps.services';
import {GradeServices} from '../services/grade.services';
import {DepartementServices} from '../services/departement.services';
import { TypeCongeComponent } from './type-conge/type-conge.component';
import {TypeCongeServices} from '../services/typeConge.services';
import { MutationComponent } from './mutation/mutation.component';
import { TypeMutationComponent } from './type-mutation/type-mutation.component';
import { EditTypeCongeComponent } from './edit-type-conge/edit-type-conge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import {CongeServices} from '../services/conge.services';
import { EditTypeMutationComponent } from './edit-type-mutation/edit-type-mutation.component';
import {MutationServices} from '../services/Mutation.services';
import { EditMutationComponent } from './edit-mutation/edit-mutation.component';
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
    EnseignantPermanentComponent,
    DiplomeComponent,
    EditDiplomeComponent,
    EnseignantVacataireComponent,
    DepartementComponent,
    CongeComponent,
    EditDepartementComponent,
    GradeComponent,
    MutationComponent,
    EditGradeComponent,
    TypeCongeComponent,
    MutationComponent,
    TypeMutationComponent,
    EditTypeCongeComponent,
    EditCongeComponent,
    EditTypeMutationComponent,
    EditCongeComponent,
    EditTypeMutationComponent,
    EditMutationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [UsersServices,EnfantServices,DiplomeServices,DepartementServices,GradeServices,CorpsServices,TypeCongeServices,CongeServices,MutationServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
