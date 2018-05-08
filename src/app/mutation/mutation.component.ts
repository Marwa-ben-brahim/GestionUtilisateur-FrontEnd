import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Mutation} from '../../model/model.mutation';
import {MutationServices} from '../../services/Mutation.services';

@Component({
  selector: 'app-mutation',
  templateUrl: './mutation.component.html',
  styleUrls: ['./mutation.component.css']
})
export class MutationComponent implements OnInit {
  pageMutation:any;
  motCle:string="";
  currentPage:number=0;
  pages:Array<number>;
  size:number=5;
  mutation:Mutation=new Mutation();
  mutations:Array<Mutation>=new Array<Mutation>();
  constructor(private mutationServices:MutationServices,public http:Http,public router:Router) { }

  ngOnInit() {
    this.chercher();
  }
  ajouter(){
    this.mutationServices.saveMutation(this.mutation)
      .subscribe(data=>{
        alert("Success d'ajout");
        console.log(data);
      },err=>{
        console.log(err);
      });
  }
  doSearch(){
    this.mutationServices.getMutations(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        console.log(data);
        this.mutations=data;
        this.pages=new Array(data.totalPages);
      },err=>{
        console.log(err);
      })
  }
  chercher()
  {
    this.mutationServices.getAllMutations()
      .subscribe(data=>{
        this.mutations=data;
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
  onEditMutation(id_mut:number){
    this.router.navigate(['editMutation',id_mut]);
  }
  onDeleteMutation(m:Mutation){
    let confirm=window.confirm("Etes-vous sûre?");
    if(confirm==true)
    {
      this.mutationServices.deleteMutation(m.idMut)
        .subscribe(data=> {
          this.pageMutation.content.splice(
            this.pageMutation.content.indexOf(m),1
          );
          console.log(data);
        },err=>{
          console.log(err);
        })
    }
  }


}
