import { Component, OnInit, Inject } from '@angular/core';
import { CongeServices } from '../../services/conge.services';
import { TypeCongeServices } from '../../services/typeConge.services';
import { PersonnelServices } from '../../services/personnel.services';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Conge } from '../../model/model.conge';
import { Personnel } from '../../model/model.personnel';
import { TypeConge } from '../../model/model.typeConge';

@Component({
  selector: 'app-modal-conge',
  templateUrl: './modal-conge.component.html',
  styleUrls: ['./modal-conge.component.css']
})
export class ModalCongeComponent implements OnInit {
  pageConge:any;
  currentPage:number=0;
  pages:Array<number>;
  size:number=5;
  conge:Conge= new Conge();
  personnel:Personnel;
  pagePersonnels:any;
  typeconge:TypeConge=new TypeConge();
  typeconges:Array<TypeConge> =new Array<TypeConge>();
  nbjour:number=0;
  nbjourRest:number=0;
  Sommenbjour:number=0;
  nom:string="";
  mat:number=0;

  constructor(private congeServices:CongeServices, 
    private typeCongeServices:TypeCongeServices,
    private personnelServices: PersonnelServices,
    public dialogRef: MatDialogRef<ModalCongeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router:Router) { }

  ngOnInit() {
    this.AfficherTypeConge();
    this.nom=this.data.name;
    this.mat=Number(this.data.matricule);
    console.log(this.nom+this.mat);
    this.personnelServices.getPersonnel(this.mat)
    .subscribe(data=>{
      this.personnel=data;
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
  {if(this.conge.dateFin!=null && this.conge.dateDebut!=null)
    return this.nbjour=((Number(this.conge.dateFin) - Number(this.conge.dateDebut))/86400000)+1;
  else
    return 0;
  }
  CalculerResteJour()
  {
    if(this.conge.dateFin!=null && this.conge.dateDebut!=null)
  {
    this.congeServices.getNbJourParType(this.personnel.matricule,this.typeconge.idCg)
      .subscribe(data=>{
       this.Sommenbjour=data;
        console.log(data);
      },err=>{
        console.log(err);
      });
    }
   return this.nbjourRest= this.typeconge.nbMaxJrs-this.Sommenbjour;
  }
  Close()
  {
    this.dialogRef.close();
  }
  ajouter(){
    this.conge.typeconge=this.typeconge;
    this.conge.personnel=this.personnel;
    this.conge.nbJour=this.nbjour;
    this.conge.valide="en-attente";
    this.congeServices.saveConge(this.conge)
      .subscribe(data=>{
        alert("Succès d'ajout");
        console.log(data);
        this.personnel.conges.push(data);
        this.personnelServices.updatePersonnel(this.personnel);
        console.log(data);
      },err=>{
        console.log(err);
      });
  }
}
