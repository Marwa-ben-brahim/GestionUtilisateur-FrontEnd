import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Personnel} from "../../model/model.personnel";
import * as $ from 'jquery';
import { CongeServices } from '../../services/conge.services';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  static idUser:number;
  personnel:Personnel=new Personnel();
  nom:string;
  type:string;
  nomberConge:number=0;
  currentPage: number = 0;
  size: number = 5;
  pageConge: any;
  constructor(private congeServices: CongeServices,public activatedRoute:ActivatedRoute,public router:Router)
  {
    if(sessionStorage.getItem('nom')!=null)
    {
    this.nom=sessionStorage.getItem('nom');
    console.log(this.nom);
    this.type=sessionStorage.getItem('type');
    }
  }
  ngOnInit() {
   this. doSearch();
  }
  toggleClicked(event: MouseEvent)
  {
      var target = event.srcElement.id;
      var body = $('body');
      var menu = $('#sidebar-menu');
      
      // toggle small or large menu
      if (body.hasClass('nav-md')) {
          menu.find('li.active ul').hide();
          menu.find('li.active').addClass('active-sm').removeClass('active');
      } else {
          menu.find('li.active-sm ul').show();
          menu.find('li.active-sm').addClass('active').removeClass('active-sm');
      }
      body.toggleClass('nav-md nav-sm');

  }
  doSearch() {
    this.congeServices.getConges("en-attente", this.currentPage, this.size)
      .subscribe(data => {
        this.pageConge=data;
        console.log(data);
        this.nomberConge=data.totalElements;
        console.log(this.nomberConge);
      }, err => {
        console.log(err);
      })
  }
}
