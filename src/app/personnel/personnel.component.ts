import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  TypePersonnel = [
    {value: 'Enseignant'},
    {value: 'Administratif'}
  ];
  type:string="";
  constructor() { }

  ngOnInit() {
  }

}
