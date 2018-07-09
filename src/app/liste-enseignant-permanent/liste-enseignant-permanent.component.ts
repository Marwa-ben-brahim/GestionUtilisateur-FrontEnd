import { Component, OnInit } from '@angular/core';
import {EnseignantPermanentServices} from "../../services/enseignantpermanent.services";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {EnseignantPermanent} from "../../model/model.enseignantpermanent";
import { AdministratifServices } from '../../services/administratif.services';
import { Departement } from '../../model/model.departement';
import { DepartementServices } from '../../services/departement.services';

@Component({
  selector: 'app-liste-enseignant-permanent',
  templateUrl: './liste-enseignant-permanent.component.html',
  styleUrls: ['./liste-enseignant-permanent.component.css']
})
export class ListeEnseignantPermanentComponent implements OnInit {
  enseignantPs:Array<EnseignantPermanent> = new Array<EnseignantPermanent>();
  pages: Array<number>;
  pageEnseignant:any;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  type:string="";
  departement:Departement=new Departement();
  departements:Array<Departement>=new Array<Departement>();
  constructor(private departementServices:DepartementServices,private adminService:AdministratifServices,private enseingnantpermanentService:EnseignantPermanentServices, public http: Http, public router: Router) { }

  ngOnInit() {
   this.chercherDepartement();
  }
  chercherEnseignant()
  {this.type="enseignant";
  this.pageEnseignant=null;
  this.pages=null;
  }
  chercherAdministratif()
  {
    this.type="administratif";  
  this.pageEnseignant=null;
  this.pages=null;
}
  gotopage(i:number)
  {
    this.currentPage=i;
    this.doSearch();
  }
  gotopageD(i:number)
  {
    this.currentPage=i;
    this.doSearchD();
  }
  Imprimer()
  {
    this.enseingnantpermanentService.ImprimerEnseignantPermanent(this.departement.idDep)
    .subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
  doSearch()
  {
  if(this.type=="enseignant")
{
  this.enseingnantpermanentService.getEnseignantPermanents(this.motCle,this.currentPage,this.size)
    .subscribe(data=>{
      this.pageEnseignant=data;
      this.pages=new Array(data.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })
}
else
{
  this.adminService.getAdministratifs(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        this.pageEnseignant=data;
        this.pages=new Array(data.totalPages);
        console.log(data);
      },err=>{
        console.log(err);
      })
}
  }
  onEditEnseignant(matricule:number){
    this.router.navigate(['EditEnseignantP',matricule]);
  }
  onDetailsEnseignant(matricule:number) {
    this.router.navigate(['DetailsEnseignantP',matricule]);

  }
  chercherDepartement()
  {
    this.departementServices.allDepartements()
      .subscribe(data=>{
        this.departements=data;
        this.pages=new Array(data.totalPages);
        console.log(data);
      },err=>{
        console.log(err);
      })
  }
  doSearchD()
  {
    this.enseingnantpermanentService.getEnseignantPermanentDepartement(this.departement.idDep,this.currentPage,this.size)
    .subscribe(data=>{
      this.pageEnseignant=data;
      this.pages=new Array(data.totalPages);
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
}
