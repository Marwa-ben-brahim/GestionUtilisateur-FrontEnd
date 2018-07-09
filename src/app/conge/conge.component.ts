import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {CongeServices} from '../../services/conge.services';
import {Conge} from '../../model/model.conge';
import {Personnel} from '../../model/model.personnel';
import {PersonnelServices} from '../../services/personnel.services';
import {TypeConge} from '../../model/model.typeConge';
import {TypeCongeServices} from '../../services/typeConge.services';
import { EnseignantPermanentServices } from '../../services/enseignantpermanent.services';
import { EnseignantPermanent } from '../../model/model.enseignantpermanent';
import { AdministratifServices } from '../../services/administratif.services';
import {MatDialog} from '@angular/material';
import { ModalCongeComponent } from '../modal-conge/modal-conge.component';

@Component({
  selector: 'app-conges',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
  pageConge:any;
  motCle:string="";
  motCle1:string="";
  currentPage:number=0;
  pages:Array<number>;
  size:number=5;
  conge:Conge= new Conge();
  personnels: Array<Personnel> = new Array<Personnel>();
  personnel:Personnel;
  pagePersonnels:any;
  typeconge:TypeConge=new TypeConge();
  typeconges:Array<TypeConge> =new Array<TypeConge>();
  nbjour:number=0;
  nbjourRest:number=0;
  Sommenbjour:number=0;
  enseignantPs:Array<EnseignantPermanent>=new Array<EnseignantPermanent>();
  type:string="";
  nom:string="";
  constructor(public dialog: MatDialog,
    private adminService:AdministratifServices,
    private enseingnantpermanentService:EnseignantPermanentServices,
    private congeServices:CongeServices, 
    private typeCongeServices:TypeCongeServices,
    private personnelServices: PersonnelServices,
    public http:Http,public router:Router) { }

  ngOnInit() {
    this.AfficherPersonnel();
  }
  chercherEnseignant()
  {this.type='enseignant';
  this.pagePersonnels=null;
  this.pages=null;
  }
  chercherAdministratif()
  {this.type='administratif';  
  this.pagePersonnels=null;
  this.pages=null;}
  AfficherPersonnel()
  {
    this.personnelServices.getAllPersonnel()
      .subscribe(data=>{
        this.personnels=data;
        console.log(data);
      },err=>{
        console.log(err);
      });
  }
  onEditConge(idCong:number){
    this.router.navigate(['editConge',idCong]);
  }
  onDeleteConge(c:Conge){
    let confirm=window.confirm("Etes-vous sûre?");
    if(confirm==true)
    {
      this.congeServices.deleteConge(c.idCong)
        .subscribe(data=> {
          this.pageConge.content.splice(
            this.pageConge.content.indexOf(c),1
          );
          console.log(data);
        },err=>{
          console.log(err);
        })
    }
  }
  doSearch()
  {
    if(this.type=='enseignant')
    { 
     this.enseingnantpermanentService.getEnseignantPermanents(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        this.pagePersonnels=data;
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
        this.pagePersonnels=data;
        this.pages=new Array(data.totalPages);
        console.log(data);
      },err=>{
        console.log(err);
      })
    }
  }
  gotopage(i:number)
  {
    this.currentPage=i;
    this.doSearch1();
  }
  doSearch1()
  {
    if(this.type=='enseignant')
    { 
     this.enseingnantpermanentService.getEnseignantPermanentPrenom(this.motCle1,this.currentPage,this.size)
      .subscribe(data=>{
        this.pagePersonnels=data;
        this.pages=new Array(data.totalPages);
        console.log(data);
      },err=>{
        console.log(err);
      })
    }
    else
    {
      this.adminService.getAdministratifPernom(this.motCle1,this.currentPage,this.size)
      .subscribe(data=>{
        this.pagePersonnels=data;
        this.pages=new Array(data.totalPages);
        console.log(data);
      },err=>{
        console.log(err);
      })
    }
  }
  ajouterConge(p:Personnel)
  {
    if(p!=null)
    this.nom=p.prenom+" "+p.nom;
    this.personnel=p;
    let dialogRef = this.dialog.open(ModalCongeComponent, {data:{name:this.nom,matricule:p.matricule}});
  }
}
