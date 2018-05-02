import { Component, OnInit } from '@angular/core';
import {Enfant} from '../../model/model.enfant';
import {EnfantServices} from '../../services/enfant.services';

@Component({
  selector: 'app-enseignant-vacataire',
  templateUrl: './enseignant-vacataire.component.html',
  styleUrls: ['./enseignant-vacataire.component.css']
})
export class EnseignantVacataireComponent implements OnInit {

  constructor(private enfantservice:EnfantServices) { }

  ngOnInit() {
  }
  Enregistrer(){

  }
  annuler(){
  }
}
