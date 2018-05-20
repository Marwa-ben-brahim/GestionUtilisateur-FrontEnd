import { Component, OnInit } from '@angular/core';
import {CongeServices} from '../../services/conge.services';
import {Conge} from '../../model/model.conge';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {Personnel} from '../../model/model.personnel';
import {UsersServices} from '../../services/users.services';

@Component({
  selector: 'app-consultation-conge',
  templateUrl: './consultation-conge.component.html',
  styleUrls: ['./consultation-conge.component.css']
})
export class ConsultationCongeComponent implements OnInit {
  pageConge: any;
  motCle: string = "";
  currentPage: number = 0;
  pages: Array<number>;
  size: number = 5;
  conge: Conge = new Conge();
  conges: Array<Conge> = new Array<Conge>();
  personnels: Array<Personnel> = new Array<Personnel>();

  constructor(private congeServices: CongeServices, private userservices: UsersServices, public http: Http, public router: Router) {
  }

  ngOnInit() {
    this.chercher();
  }

  ajouter() {

  }

  doSearch() {
    this.congeServices.getConges(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        console.log(data);
        this.pageConge = data;
        this.pages = new Array(data.totalPages);
      }, err => {
        console.log(err);
      })
  }

  chercher() {
    this.congeServices.allConges()
      .subscribe(data => {
        console.log(data);
        this.conges = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })
  }

  gotopage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditConge() {

  }

  onDeleteConge() {
  }

}
