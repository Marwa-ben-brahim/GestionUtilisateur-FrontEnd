import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {UsersServices} from '../services/users.services';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
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
import {TypeMutationsServices} from '../services/typeMutation.services';
import { ConsultationCongeComponent } from './consultationConge/consultation-conge.component';
import { EnseignantPermanentComponent } from './enseignant-permanent/enseignant-permanent.component';
import {  MatButtonModule,
  MatTabsModule,
  MatSelectModule,
  MatExpansionModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatListModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatIconModule, MatAutocompleteModule, MatMenuModule, MatTableModule, MatPaginatorModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '../polyfills';
import {EnseignantPermanentServices} from '../services/enseignantpermanent.services';
import {AGradeServices} from '../services/agrade.services';
import {DiplomePersonnelServices} from '../services/diplomepersonnel.services';
import { PosteAdministrativeComponent } from './poste-administratif/poste-administrative.component';
import { EditPosteAdministrativeComponent } from './edit-poste-administratif/edit-poste-administrative.component';
import {PosteAdministrativeServices} from '../services/posteAdministrative.services';
import { PeriodeComponent } from './periode/periode.component';
import {PeriodeServices} from '../services/periode.services';
import { EditPeriodeComponent } from './edit-periode/edit-periode.component';
import { CorpsComponent } from './corps/corps.component';
import { EditCorpsComponent } from './edit-corps/edit-corps.component';
import { DiplomePersonnelComponent } from './diplome-personnel/diplome-personnel.component';
import { EditDiplomePersonnelComponent } from './edit-diplome-personnel/edit-diplome-personnel.component';
import { ListeEnseignantPermanentComponent } from './liste-enseignant-permanent/liste-enseignant-permanent.component';
import { HistoriqueCongeComponent } from './historique-conge/historique-conge.component';
import { DetailsEnseignantComponent } from './details-enseignant/details-enseignant.component';
import { AGradeComponent } from './a-grade/a-grade.component';
import { EditAgradeComponent } from './edit-agrade/edit-agrade.component';
import { EditEnseignantPermanentComponent } from './edit-enseignant-permanent/edit-enseignant-permanent.component';
import {PersonnelServices} from '../services/personnel.services';
@NgModule ({
  declarations: [
    AppComponent,
    UsersComponent,
    NewUserComponent,
    EditUserComponent,
    LoginComponent,
    IndexComponent,
    FooterComponent,
    SideBarComponent,
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
    EditMutationComponent,
    ConsultationCongeComponent,
    EnseignantPermanentComponent,
    PosteAdministrativeComponent,
    EditPosteAdministrativeComponent,
    PeriodeComponent,
    EditPeriodeComponent,
    CorpsComponent,
    EditCorpsComponent,
    DiplomePersonnelComponent,
    EditDiplomePersonnelComponent,
    ListeEnseignantPermanentComponent,
    HistoriqueCongeComponent,
    DetailsEnseignantComponent,
    AGradeComponent,
    EditAgradeComponent,
    EditEnseignantPermanentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [UsersServices,EnfantServices,DiplomeServices,DepartementServices,GradeServices,CorpsServices,TypeCongeServices,CongeServices,MutationServices,
    TypeMutationsServices,EnseignantPermanentServices,AGradeServices,DiplomePersonnelServices,PosteAdministrativeServices,PeriodeServices,PersonnelServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
