import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Conge} from "../../model/model.conge";
import {Http} from "@angular/http";
import {CongeServices} from "../../services/conge.services";
import {Router, ActivatedRoute} from "@angular/router";
import {PersonnelServices} from "../../services/personnel.services";
import {Personnel} from "../../model/model.personnel";
import { RepriseCongeComponent } from '../reprise-conge/reprise-conge.component';
import { MatDialog } from '@angular/material';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { HttpClient } from '@angular/common/http';
import { ImpressionServices } from '../../services/Impression.services';
@Component({
  selector: 'app-historique-conge',
  templateUrl: './historique-conge.component.html',
  styleUrls: ['./historique-conge.component.css']
})
export class HistoriqueCongeComponent implements OnInit {
  conges:Array<Conge>=new Array<Conge>();
  pageConge:any;
  motCle:string="accepte";
  currentPage:number=0;
  pages:Array<number>;
  size:number=1000;
  conge:Conge= new Conge();
  personnel:Personnel=new Personnel();
  personnels:Array<Personnel>=new Array<Personnel>();
  idPers:number;
  dataTable: any;
  canReprise:boolean=false;
  nom:string;
  lang:string;
  constructor(private congeServices:CongeServices,
    public activatedRoute:ActivatedRoute,
    public personnelService:PersonnelServices,
    public imprimerService:ImpressionServices,
    private chRef: ChangeDetectorRef, 
    private http: HttpClient,
    public dialog: MatDialog,
    public router:Router) 
    {
      this.idPers=activatedRoute.snapshot.params['idPers'];
      this.lang=sessionStorage.getItem("lang");
     }

  ngOnInit() {
    this.personnelService.getPersonnel(this.idPers)
    .subscribe(data=>{
      this.personnel=data;
      if(this.lang=="fr")
    {
      this.nom=this.personnel.prenom+" "+this.personnel.nom;  
    }
    else
    {
      this.nom=this.personnel.prenomAr+" "+this.personnel.nomAr;
    }
      console.log(data);
    },err=>{
      console.log(err);
    });
    this.doSearch();
    
    console.log(this.nom);
  }
  doSearch(){
    this.congeServices.getCongesPersonnel(this.idPers,this.currentPage,this.size)
    .subscribe((data: any[]) => {
      this.pageConge=data;
      this.chRef.detectChanges();
      // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable();
      },err=>{
        console.log(err);
      })
  }
  gotopage(i:number)
  {
    this.currentPage=i;
    this.doSearch();
  }
  RepriseConge(c:Conge)
  {
    let dialogRef = this.dialog.open(RepriseCongeComponent, {data:{name:c.idCong}});
    this.doSearch();
  }
  RepriseResultat(reprise:boolean)
  {
    if(this.lang=="fr")
    {
      if(reprise)
      {
        return "Oui";
      }
      else
      return "Non";
    }
    if(this.lang=="ar")
    {
      if(reprise)
      {
        return "نعم";
      }
      else
      return "لا";
    }
   
  }
  CanReprise(valide:string)
  {
    if(valide=="en-attente")
  {
    this.canReprise=true;
  }
  else if(valide=="refuse")
  {
    this.canReprise=true;
  }
  else
  {
    this.canReprise=false;
  }
  }
  ImprimerReprise(c:Conge)
  {
    this.imprimerService.ImprimerRepriseMaladie(c.idCong)
    .subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
}
