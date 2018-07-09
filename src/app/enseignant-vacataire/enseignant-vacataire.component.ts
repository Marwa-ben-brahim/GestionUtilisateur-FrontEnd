import { Component, OnInit } from '@angular/core';
import {Enfant} from '../../model/model.enfant';
import {EnfantServices} from '../../services/enfant.services';
import { DemandeVacationServices } from '../../services/demandeVacation.services';
import { DemandeVacation } from '../../model/model.demandeVacation';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enseignant-vacataire',
  templateUrl: './enseignant-vacataire.component.html',
  styleUrls: ['./enseignant-vacataire.component.css']
})
export class EnseignantVacataireComponent implements OnInit {
  demandeVacation:DemandeVacation=new DemandeVacation();
  constructor(private demandeVacationService:DemandeVacationServices,public http: Http,public router: Router)
     { }

  ngOnInit() {
  }
  Enregistrer(){
    this.demandeVacationService.saveDemandeVacation(this.demandeVacation)
    .subscribe(data=>{
      alert("Success d'ajout");
      console.log(data);
    },err=>{
      console.log(err);
    });
  }
  annuler(){
  }
}
