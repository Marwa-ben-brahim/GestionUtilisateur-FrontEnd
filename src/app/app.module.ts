import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { EnseignantPermanentComponent } from './enseignant-permanent/enseignant-permanent.component';
import {AppRoutingModule} from './app.routing';
import { DiplomeComponent } from './diplome/diplome.component';
import {EnfantServices} from '../services/enfant.services';
import {DiplomeServices} from '../services/diplome.services';
import { EditDiplomeComponent } from './edit-diplome/edit-diplome.component';
import { GradeComponent } from './grade/grade.component';
import { EditGradeComponent } from './edit-grade/edit-grade.component';
import { DepartementComponent } from './departement/departement.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { CorpsComponent } from './corps/corps.component';
import { EditCorpsComponent } from './edit-corps/edit-corps.component';
import {GradeServices} from "../services/grade.services";
import {DepartementServices} from "../services/departement.services";
import {EnseignantPermanentServices} from "../services/enseignantpermanent.services";
import {AGradeServices} from "../services/agrade.services";
import {DiplomePersonnelServices} from "../services/diplomepersonnel.services";
import {
  MatButtonModule,
  MatTabsModule,
  MatSelectModule,
  MatExpansionModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatListModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatIconModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatTooltipModule, MatSidenavModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '../polyfills';
import {CorpsServices} from "../services/corps.services";
import { TypeMutationComponent } from './type-mutation/type-mutation.component';
import { TypeCongeComponent } from './type-conge/type-conge.component';
import { EditTypeMutationComponent } from './edit-type-mutation/edit-type-mutation.component';
import { EditTypeCongeComponent } from './edit-type-conge/edit-type-conge.component';
import { CongeComponent } from './conge/conge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { EditMutationComponent } from './edit-mutation/edit-mutation.component';
import { MutationComponent } from './mutation/mutation.component';
import {TypeCongeServices} from "../services/typeConge.services";
import {CongeServices} from "../services/conge.services";
import {TypeMutationsServices} from "../services/typeMutation.services";
import {MutationServices} from "../services/Mutation.services";
import { PosteAdministrativeComponent } from './poste-administrative/poste-administrative.component';
import { EditPosteAdministrativeComponent } from './edit-poste-administrative/edit-poste-administrative.component';
import {PosteAdministrativeServices} from "../services/posteAdministrative.services";
import { DiplomePersonnelComponent } from './diplome-personnel/diplome-personnel.component';
import {FormControl, Validators} from '@angular/forms';
import { ListeEnseignantPermanentComponent } from './liste-enseignant-permanent/liste-enseignant-permanent.component';
import { AGradeComponent } from './a-grade/a-grade.component';
import { PeriodeComponent } from './periode/periode.component';
import {PeriodeServices} from "../services/periode.services";
import { DetailsEnseignantComponent } from './details-enseignant/details-enseignant.component';
import { HistoriqueCongeComponent } from './historique-conge/historique-conge.component';
import { EditAgradeComponent } from './edit-agrade/edit-agrade.component';
import {PersonnelServices} from "../services/personnel.services";
import { EditEnseignantPermanentComponent } from './edit-enseignant-permanent/edit-enseignant-permanent.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { OrganismeAccueilComponent } from './organisme-accueil/organisme-accueil.component';
import {SpecialiteServices} from "../services/specialite.services";
import { EditSpecialiteComponent } from './edit-specialite/edit-specialite.component';
import {OrganismeAccueilServices} from "../services/organismeAccueil.services";
import { ServiceComponent } from './service/service.component';
import {ServiceServices} from "../services/service.services";
import {AdministratifServices} from "../services/administratif.services";
import { AdministratifComponent } from './administratif/administratif.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { ProfileComponent } from './profile/profile.component';
import { EnseignantVacataireComponent } from './enseignant-vacataire/enseignant-vacataire.component';
import { DemandeVacationServices } from '../services/demandeVacation.services';
import { CongePersonnelComponent } from './conge-personnel/conge-personnel.component';
import { ModalCongeComponent } from './modal-conge/modal-conge.component';
import { ConsultationCongeComponent } from './consultationConge/consultation-conge.component';
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
    EnseignantPermanentComponent,
    DiplomeComponent,
    EditDiplomeComponent,
    GradeComponent,
    EditGradeComponent,
    DepartementComponent,
    EditDepartementComponent,
    CorpsComponent,
    EditCorpsComponent,
    TypeMutationComponent,
    TypeCongeComponent,
    EditTypeMutationComponent,
    EditTypeCongeComponent,
    CongeComponent,
    EditCongeComponent,
    EditMutationComponent,
    MutationComponent,
    ConsultationCongeComponent,
    PosteAdministrativeComponent,
    EditPosteAdministrativeComponent,
    DiplomePersonnelComponent,
    ListeEnseignantPermanentComponent,
    AGradeComponent,
    PeriodeComponent,
    DetailsEnseignantComponent,
    HistoriqueCongeComponent,
    EditAgradeComponent,
    EditEnseignantPermanentComponent,
    SpecialiteComponent,
    OrganismeAccueilComponent,
    EditSpecialiteComponent,
    ServiceComponent,
    AdministratifComponent,
    PersonnelComponent,
    EditServiceComponent,
    ProfileComponent,
    EnseignantVacataireComponent,
    CongePersonnelComponent,
    ModalCongeComponent
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
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDialogModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [PeriodeServices,EnfantServices,CorpsServices,DiplomeServices,GradeServices,DepartementServices,EnseignantPermanentServices,AGradeServices,DiplomePersonnelServices,TypeCongeServices,CongeServices,MutationServices,
    TypeMutationsServices,PosteAdministrativeServices,DemandeVacationServices,PersonnelServices,SpecialiteServices,OrganismeAccueilServices,ServiceServices,AdministratifServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
