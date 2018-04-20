import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {DiplomeServices} from '../../services/diplome.services';
import {Router} from '@angular/router';
import {Diplome} from '../../model/model.diplome';


@Component({
  selector: 'app-diplomes',
  templateUrl: './diplomes.component.html',
  styleUrls: ['./diplomes.component.css']
})
export class DiplomesComponent implements OnInit {
  pageDiplomes:any;
  motCle:string="";
  currentPage:number=0;
  pages:Array<number>;
  size:number=5;
  diplome:Diplome=new Diplome();
  constructor(public http:Http, public diplomeservice:DiplomeServices, public router:Router) { }

  ngOnInit() {
  }
  ajouter(){
      this.diplomeservice.saveDiplome(this.diplome)
        .subscribe(data=>{
          alert("Success d'ajout");
          //this.router.navigate(['users']);
          console.log(data)
        },err=>{
          console.log(err);
        });
  }
  doSearch(){
    this.diplomeservice.getDiplomes(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        this.pageDiplomes=data;
        this.pages=new Array(data.totalPages);
      },err=>{
        console.log(err);
      })
  }
  chercher()
  {
    this.doSearch();
  }
  gotopage(i:number)
  {
    this.currentPage=i;
    this.doSearch();
  }
  onEditDiplome(id:number){
    //this.router.navigate(['editUser',login]);
  }
  onDeleteDiplome(d:Diplome){
    let confirm=window.confirm("Etes-vous sûre?");
    if(confirm==true)
    {
      this.diplomeservice.deleteDiplome(d.id)
        .subscribe(data=> {
          this.pageDiplomes.content.splice(
            this.pageDiplomes.content.indexOf(d),1
          );
        },err=>{
          console.log(err);
        })
    }
  }
}
