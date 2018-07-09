import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Periode} from '../../model/model.periode';
import {PeriodeServices} from '../../services/periode.services';
import {Personnel} from '../../model/model.personnel';
import {PosteAdministrative} from '../../model/model.posteAdministrative';
import {PosteAdministrativeServices} from '../../services/posteAdministrative.services';
import {PersonnelServices} from '../../services/personnel.services';

@Component({
  selector: 'app-edit-periode',
  templateUrl: './edit-periode.component.html',
  styleUrls: ['./edit-periode.component.css']
})
export class EditPeriodeComponent implements OnInit {
  periode: Periode = new Periode();
  postes: Array<PosteAdministrative> = new Array<PosteAdministrative>();
  personnels: Array<Personnel> = new Array<Personnel>();
  posteAdmin:PosteAdministrative;
  personnel:Personnel;
  id: number = 0;

  constructor(public activatedRoute: ActivatedRoute,
              public periodeService: PeriodeServices,
              private posteServices: PosteAdministrativeServices,
              private personnelservices: PersonnelServices,
              public router: Router) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.AfficherPersonnel();
    this.chercherPosteAdmin();
    this.periodeService.getPeriode(this.id)
      .subscribe(data => {
        this.periode = data;
        console.log(data);
      }, err => {
        console.log(err);
      })
  }
  AfficherPersonnel()
  {
    this.personnelservices.getAllPersonnel()
      .subscribe(data=>{
        this.personnels=data;
        console.log(data);
      },err=>{
        console.log(err);
      });
  }
  chercherPosteAdmin()
  {
    this.posteServices.getAllPostes()
      .subscribe(data=>{
        this.postes=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }

  updatePeriode() {
    this.periode.personnel=this.personnel;
    this.periode.posteAdmin=this.posteAdmin;
    this.periodeService.updatePeriode(this.periode)
      .subscribe(data => {
        console.log(data);
        alert("Mise à jour effectuée");
        this.router.navigate(['periode']);
      }, err => {
        console.log(err);
        alert("Probléme");
      })
  }
}
