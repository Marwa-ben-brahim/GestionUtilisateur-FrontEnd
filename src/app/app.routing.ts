import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {UsersServices} from '../services/users.services';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import {CommonModule} from "@angular/common";
import {EnseignantPermanentComponent} from './enseignant-permanent/enseignant-permanent.component';
import {EnseignantVacataireComponent} from './enseignant-vacataire/enseignant-vacataire.component';
import {IndexComponent} from './index/index.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {DiplomeComponent} from './diplome/diplome.component';
import {EditDiplomeComponent} from './edit-diplome/edit-diplome.component';
import {DepartementComponent} from './departement/departement.component';
import {GradeComponent} from './grade/grade.component';
import {EditDepartementComponent} from './edit-departement/edit-departement.component';
import {EditGradeComponent} from './edit-grade/edit-grade.component';
import {TypeCongeComponent} from './type-conge/type-conge.component';
import {EditTypeCongeComponent} from './edit-type-conge/edit-type-conge.component';
import {CongeComponent} from './conge/conge.component';
import {TypeMutationComponent} from './type-mutation/type-mutation.component';
import {EditTypeMutationComponent} from './edit-type-mutation/edit-type-mutation.component';
import {MutationComponent} from './mutation/mutation.component';
import {CorpsComponent} from './corps/corps.component';
import {ConsultationCongeComponent} from './consultationConge/consultation-conge.component';
import {PosteAdministrativeComponent} from './poste-administratif/poste-administrative.component';
import {EditPosteAdministrativeComponent} from './edit-poste-administratif/edit-poste-administrative.component';
import {PeriodeComponent} from './periode/periode.component';
import {EditPeriodeComponent} from './edit-periode/edit-periode.component';
import {EditCorpsComponent} from './edit-corps/edit-corps.component';
import {ListeEnseignantPermanentComponent} from './liste-enseignant-permanent/liste-enseignant-permanent.component';
import {DiplomePersonnel} from '../model/model.diplomepersonnel';


const appRoutes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'new-user',component:NewUserComponent},
  {path:'editUser/:login',component:EditUserComponent},
  {path:'sidebar',component:SideBarComponent},
  {path:'index',component:IndexComponent},
  {path:'enseignantpermanent',component:EnseignantPermanentComponent},
  {path:'enseignantvacataire',component:EnseignantVacataireComponent},
  {path:'diplome',component:DiplomeComponent},
  {path:'departement',component:DepartementComponent},
  {path:'conge',component:CongeComponent},
  {path:'consultationConge',component:ConsultationCongeComponent},
  {path:'posteAdmin',component:PosteAdministrativeComponent},
  {path:'enseignantpermanent',component:EnseignantPermanentComponent},
  {path:'typeConge',component:TypeCongeComponent},
  {path:'typeMutation',component:TypeMutationComponent},
  {path:'editDepartement/:idDep',component:EditDepartementComponent},
  {path:'editDiplome/:idDip',component:EditDiplomeComponent},
  {path:'grade',component:GradeComponent},
  {path:'periode',component:PeriodeComponent},
  {path:'mutation',component:MutationComponent},
  {path:'corps',component:CorpsComponent},
  {path:'editGrade/:id',component:EditGradeComponent},
  {path:'editDepartement/:idDep',component:EditDepartementComponent},
  {path:'editPeriode/:id',component:EditPeriodeComponent},
  {path:'editPosteAdmin/:id',component:EditPosteAdministrativeComponent},
  {path:'editConge/:idCong',component:EditTypeCongeComponent},
  {path:'editTypeConge/:idCg',component:EditTypeCongeComponent},
  {path:'editCorps/:code',component:EditCorpsComponent},
  {path:'editTypeMutation/:code',component:EditTypeMutationComponent},
  {path:'ListeEnseignantP',component:ListeEnseignantPermanentComponent},
  {path:'DiplomePersonnel',component:DiplomePersonnel},
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

export const routingComponents = [
  LoginComponent, UsersComponent, NewUserComponent,
  EditUserComponent,SideBarComponent,IndexComponent,EnseignantPermanentComponent,DiplomeComponent,EditTypeCongeComponent]

