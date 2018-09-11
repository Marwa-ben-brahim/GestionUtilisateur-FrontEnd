import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Personnel } from '../../model/model.personnel';
import { Conge } from '../../model/model.conge';
import { TypeConge } from '../../model/model.typeConge';
import { CongeServices } from '../../services/conge.services';
import { TypeCongeServices } from '../../services/typeConge.services';
import { PersonnelServices } from '../../services/personnel.services';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conge-personnel',
  templateUrl: './conge-personnel.component.html',
  styleUrls: ['./conge-personnel.component.css']
})
export class CongePersonnelComponent implements OnInit {
  idUser:number=0;
  pageConge:any;
  conge:Conge= new Conge();
  personnel:Personnel;
  pagePersonnels:any;
  typeconge:TypeConge=new TypeConge();
  typeconges:Array<TypeConge> =new Array<TypeConge>();
  nbjour:number=0;
  nbjourRest:number=0;
  Sommenbjour:number;
  nom:string="";
  selectedFile:File=null;
  lang="";
  nomberJour:any;
   restjour:any;
  constructor(private congeServices:CongeServices, 
    private typeCongeServices:TypeCongeServices,
    public http: HttpClient,
    private personnelServices: PersonnelServices) 
    {
      this.lang=sessionStorage.getItem("lang");
     }

  ngOnInit() {
    if(sessionStorage.getItem('idUser')!=null)
    {
    this.idUser=Number(sessionStorage.getItem('idUser'));
    }
    this.doSearch();
    this.AfficherTypeConge();
    this.CalculerResteJour();
  }
  doSearch()
  {
  this.personnelServices.getPersonnel(this.idUser)
  .subscribe(data=>{
    this.personnel=data;
    if(this.lang=='fr')
    {
      this.nom=this.personnel.prenom+" "+this.personnel.nom;
    }
    if(this.lang=='ar')
    {
      this.nom=this.personnel.prenomAr+" "+this.personnel.nomAr;
    }
    
    console.log(data);
  },err=>{
    console.log(err);
  })
}
ajouter(){
  this.conge.typeconge=this.typeconge;
  this.conge.personnel=this.personnel;
  this.conge.nbJour=this.nbjour;
  this.conge.valide="en-attente";
  this.conge.valideAr="في الإنتظار";
  this.conge.dateCreationConge=new Date();
  this.congeServices.saveConge(this.conge)
    .subscribe(data=>{
      alert("Succès d'ajout");
      console.log(data);
      this.personnel.conges.push(data);
      this.personnelServices.updatePersonnel(this.personnel);
      if(this.typeconge.libelleType=="Maladie")
      {
        this.upload(data.idCong);
      }
      console.log(data);
    },err=>{
      console.log(err);
    });
}
AfficherTypeConge()
{
  this.typeCongeServices.allTypesConges()
    .subscribe(data=>{
      this.typeconges=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
}
CalculerNbjour()
{
  if(this.conge.dateFin!=null && this.conge.dateDebut!=null)
  {this.nbjour=((Number(this.conge.dateFin) - Number(this.conge.dateDebut))/86400000)+1;
    console.log(this.nbjour);
  return this.nbjour;
}
else
  return 0;
}
NomberJour()
  {var somme:number=0;
    if(this.typeconge)
    {
      this.congeServices.getNbJourParType(this.personnel.idPers,this.typeconge.idCg)
      .subscribe(data=>{
      this.Sommenbjour=data;
      somme= data;
      //alert ("Il vous Reste "+somme);
      console.log("il reste "+somme);
      },err=>{
        console.log(err);
      });
    }
     
        return somme;
}
CalculerResteJour()
{
  if(this.conge.dateFin!=null && this.conge.dateDebut!=null)
{
  this.congeServices.getNbJourParType(this.personnel.idPers,this.typeconge.idCg)
    .subscribe(data=>{
     this.Sommenbjour=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
  }
 return this.nbjourRest= this.typeconge.nbMaxJrs-this.Sommenbjour;
}
onSelected(event)
{ 
  this.nomberJour=this.CalculerNbjour();
  //this.CalculerResteJour();
 this.NomberJour();
  this.restjour=this.typeconge.nbMaxJrs-(this.Sommenbjour+this.nbjour);
  if(this.Sommenbjour==null)
  {
    this.restjour=this.typeconge.nbMaxJrs-this.nbjour;
  }
  console.log(event+" "+this.Sommenbjour+"   "+this.nomberJour);
 // this.restjour =this.typeconge.nbMaxJrs-(this.Sommenbjour+this.nomberJour);
 
}
onFileSelected(event)
{
  this.selectedFile=<File>event.target.files[0];
}
upload(idCong:number)
{
  const fb=new FormData();
  fb.append('uploadfile',this.selectedFile,this.selectedFile.name);
 this.http.post("http://localhost:8080/uploadFile/"+idCong,fb)
 .subscribe(res=>{
   console.log(res);
 })
}
}
