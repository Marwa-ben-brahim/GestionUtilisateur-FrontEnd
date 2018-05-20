import { Component, OnInit } from '@angular/core';
import {EnseignantPermanentServices} from "../../services/enseignantpermanent.services";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {EnseignantPermanent} from "../../model/model.enseignantpermanent";
import {Mutation} from "../../model/model.mutation";

@Component({
  selector: 'app-liste-enseignant-permanent',
  templateUrl: './liste-enseignant-permanent.component.html',
  styleUrls: ['./liste-enseignant-permanent.component.css']
})
export class ListeEnseignantPermanentComponent implements OnInit {
  enseignantPs:Array<EnseignantPermanent> = new Array<EnseignantPermanent>();
  pages: Array<number>;
  pageEnseignant:any;
  constructor(private enseingnantpermanentService:EnseignantPermanentServices, public http: Http, public router: Router) { }

  ngOnInit() {
    this.chercherEnseignant();
  }
  chercherEnseignant()
  {
    this.enseingnantpermanentService.getAllEnseignantPermanents()
      .subscribe(data=>{
        this.enseignantPs=data;
        this.pages=new Array(data.totalPages);
        console.log(data);
      },err=>{
        console.log(err);
      })
  }
  onEditEnseignant(matricule:number){
    this.router.navigate(['editMutation',matricule]);
  }
  onDeleteEnseignant(e:EnseignantPermanent) {
    let confirm = window.confirm("Etes-vous sûre?");
    if (confirm == true) {
      this.enseingnantpermanentService.deleteEnseignantPermanent(e.matricule)
        .subscribe(data => {
          this.pageEnseignant.content.splice(
            this.pageEnseignant.content.indexOf(e), 1
          );
          console.log(data);
        }, err => {
          console.log(err);
        })
    }
  }
}
