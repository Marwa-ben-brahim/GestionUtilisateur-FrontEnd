import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { EnseignantPermanentServices } from '../../services/enseignantpermanent.services';
import { Router } from '../../../node_modules/@angular/router';
import { ImpressionServices } from '../../services/Impression.services';
import { DepartementServices } from '../../services/departement.services';
import { CorpsServices } from '../../services/corps.services';
import { GradeServices } from '../../services/grade.services';
import { Departement } from '../../model/model.departement';
import { Grade } from '../../model/model.grade';
import { Corps } from '../../model/model.corps';

@Component({
  selector: 'app-liste-etat',
  templateUrl: './liste-etat.component.html',
  styleUrls: ['./liste-etat.component.css']
})
export class ListeEtatComponent implements OnInit {
  mois:number=0;
  annee:number=0;
  type:string="";
  lang="";
  departements: Array<Departement> = new Array<Departement>();
  grades: Array<Grade> = new Array<Grade>();
  corps: Array<Corps> = new Array<Corps>();
  departement:Departement=new Departement();
  grade:Grade=new Grade();
  corp:Corps=new Corps();
  constructor(public http:HttpClient,
    public dialogRef: MatDialogRef<ListeEtatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private impressionServices:ImpressionServices,
    private departementServices:DepartementServices,
    private corpsServices:CorpsServices,
    private gradeServices:GradeServices,
    private enseingnantpermanentService:EnseignantPermanentServices,
    public router:Router) 
    {
      this.type=this.data.name;
      this.lang=sessionStorage.getItem("lang");
    }

  ngOnInit() {
    this.chercherCorp();
    this.chercherDep();
    this.chercherGrad();
  }
  ImprimerDepartement()
  {
    this.impressionServices.ImprimerListePersonnelDepartement(this.departement.idDep)
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  ImprimerGrade()
  {
    this.impressionServices.ImprimerListePersonnelGrade(this.grade.id)
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  ImprimerCorps()
  {
    this.impressionServices.ImprimerListePersonnelCorps(this.corp.idcps)
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
 chercherDep() {
    this.departementServices.allDepartements()
      .subscribe(data => {
        this.departements = data;
        console.log(data);
      }, err => {
        console.log(err);
      })
  }

  chercherGrad()
  {
    this.gradeServices.getAllGrades()
      .subscribe(data=>{
        this.grades=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }
  chercherCorp()
  {
    this.corpsServices.allCorpss()
      .subscribe(data=>{
        this.corps=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }
}
