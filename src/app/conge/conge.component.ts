import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {CongeServices} from '../../services/conge.services';
import {Conge} from '../../model/model.conge';

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
  constructor(private congeServices:CongeServices,public http:Http,public router:Router) { }

  ngOnInit() {
    this.chercher();
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
