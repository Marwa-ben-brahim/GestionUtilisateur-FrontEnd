import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {CongeServices} from '../../services/conge.services';
import {Conge} from '../../model/model.conge';
import {Personnel} from '../../model/model.personnel';
import {UsersServices} from '../../services/users.services';
import {TypeConge} from '../../model/model.typeConge';
import {TypeCongeServices} from '../../services/typeConge.services';

@Component({
  selector: 'app-conges',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
  pageConge:any;
  motCle:string="";
  currentPage:number=0;
  pages:Array<number>;
  size:number=5;
  conge:Conge= new Conge();
  conges:Array<Conge>=new Array<Conge>();
  personnels: Array<Personnel> = new Array<Personnel>();
  personnel:Personnel;
  typeconge:TypeConge=new TypeConge();
  typeconges:Array<TypeConge> =new Array<TypeConge>();
  constructor(private congeServices:CongeServices, private typeCongeServices:TypeCongeServices,private userservices: UsersServices,public http:Http,public router:Router) { }

  ngOnInit() {
    this.chercher();
    this.AfficherPersonnel();
    this.AfficherTypeConge();
  }
  ajouter(){
    this.congeServices.saveConge(this.conge)
      .subscribe(data=>{
        alert("Succès d'ajout");
        console.log(data);
      },err=>{
        console.log(err);
      });
  }
  AfficherPersonnel()
  {
    this.userservices.getAllPersonnel()
      .subscribe(data=>{
        this.personnels=data;
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
  doSearch(){
    this.congeServices.getConges(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        console.log(data);
        this.pageConge=data;
        this.pages=new Array(data.totalPages);
      },err=>{
        console.log(err);
      })
  }
  chercher()
  {
    this.congeServices.allConges()
      .subscribe(data=>{
        this.conges=data;
        this.pages=new Array(data.totalPages);
        console.log(data);
      },err=>{
        console.log(err);
      })
  }
  gotopage(i:number)
  {
    this.currentPage=i;
    this.doSearch();
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
}
