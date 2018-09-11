import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CongeServices } from '../../services/conge.services';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelServices } from '../../services/personnel.services';
import { Conge } from '../../model/model.conge';
import { Personnel } from '../../model/model.personnel';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-personnel-historique',
  templateUrl: './personnel-historique.component.html',
  styleUrls: ['./personnel-historique.component.css']
})
export class PersonnelHistoriqueComponent implements OnInit {
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
  lang:string;
  nom:string;
 
  constructor(private congeServices:CongeServices,
    public activatedRoute:ActivatedRoute,
    private chRef: ChangeDetectorRef, 
    private http: HttpClient,
    public personnelService:PersonnelServices,
    public router:Router) 
    {
      this.idPers=Number(sessionStorage.getItem('idUser'));
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
    },err=>{
      console.log(err);
    });
    this.doSearch();
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
  Modifiable(c:Conge)
  {
    if(c.dateDebut<new Date() && c.valide=="en-attente")
    return true;
    else
    return false;
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
  ModifierConge(c)
  {

  }
}
