import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {TypeCongeServices} from '../../services/typeConge.services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-type-mutation',
  templateUrl: './type-mutation.component.html',
  styleUrls: ['./type-mutation.component.css']
})
export class TypeMutationComponent implements OnInit {
  pageTypeConge:any;
  motCle:string="";
  currentPage:number=0;
  pages:Array<number>;
  size:number=5;
  typeMutation:TypeMutation=new TypeMutation();
  typeMutations:Array<TypeMutation>=new Array<TypeMutation>();
  constructor(private typeMutationServices:TypeMutationServices,public http:Http,public router:Router) {

  }

  ngOnInit() {
  }

}
