import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";
import {EnseignantPermanent} from "../../model/model.enseignantpermanent";
import {Personnel} from "../../model/model.personnel";
import {EnseignantPermanentServices} from "../../services/enseignantpermanent.services";
import { AdministratifServices } from '../../services/administratif.services';
import { PersonnelServices } from '../../services/personnel.services';
import {NotificationsService} from 'angular4-notify';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:string="";
  motpasse:string="";
  currentPage:number=0;
  pages:Array<number>;
  size:number=5;
  idUser:number;
  type:string="admin";
  personnel:Personnel=new Personnel();
  constructor(public http:Http,
              public personnelService:PersonnelServices,
              public enseignantPermServices:EnseignantPermanentServices,
              public administratifServices:AdministratifServices,
              public personnelServices:PersonnelServices,
              public router:Router,
              private translate: TranslateService,
              private notificationsService: NotificationsService) { }

  ngOnInit() {
  }
  switchLanguage(Language:string)
  {
    this.translate.use(Language);
    sessionStorage.setItem("lang",Language);
  }
  doSearch(){
    
    this.personnelService.getPersonnelLogin(this.login,this.motpasse)
      .subscribe(data=>{
        this.personnel=data; 
        console.log(this.personnel.idPers);
       sessionStorage.setItem('idUser',this.personnel.idPers+"");
       sessionStorage.setItem('nom',this.personnel.prenom+" "+this.personnel.nom);
       sessionStorage.setItem('nomAr',this.personnel.prenomAr+" "+this.personnel.nomAr);
       sessionStorage.setItem('role',this.personnel.role.type);
       this.router.navigate(['index']);
      },err=>{
        console.log(err);
        this.notificationsService.addError('Verifier votre login et mot de passe');
      })
  }
  chercheUser(){
    this.doSearch();
  }
 /*  TypePersonnel(p:Personnel)
  {    
    this.personnelServices.getTypePersonnel(p.matricule)
    .subscribe(data=>{
      console.log(data);
      this.type=data;
    },err=>{
      console.log(err);
    })
  }
  isAdmin(p:Personnel)
  {
    this.administratifServices.getAdministratif(p.matricule)
      .subscribe(data=>{
        console.log(data)
       this.personnel=data;
      },err=>{
        console.log(err);
      })
      if(this.personnel!=null)
      this.type="admin";
  }
  isEnseignantP(p:Personnel)
  {
    this.enseignantPermServices.getEnseignantPermanent(p.matricule)
      .subscribe(data=>{
        console.log(data)
       this.personnel=data;
      },err=>{
        console.log(err);
      })
      if(this.personnel!=null)
      this.type="enseignant";
  } */
}
