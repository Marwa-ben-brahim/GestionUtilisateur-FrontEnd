import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Personnel} from '../../model/model.personnel';
import {Http} from '@angular/http';
import {PersonnelServices} from "../../services/personnel.services";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
personnel:Personnel=new Personnel();
personnels:Array<Personnel>=new Array<Personnel>();
loginU:string="admin";
motpassU:string="admin";
hide = true;
constructor(public http:Http, public personnelServices:PersonnelServices, public router:Router)
{}

  ngOnInit() {
    this.AfficherPersonnel();
  }
  AfficherPersonnel()
  {
    this.personnelServices.getAllPersonnel()
      .subscribe(data=>{
      this.personnels=data;
        console.log(data);
      },err=>{
        console.log(err);
      });
  }
saveUser(){
    this.personnel.login=this.loginU;
    this.personnel.motpasse=this.motpassU;
    this.personnelServices.updatePersonnel(this.personnel)
    .subscribe(data=>{
      alert("Success d'ajout un utilisateur");
      this.router.navigate(['users']);
    console.log(data);
    },err=>{
      console.log(err);
    });

}
concatination()
{
  var  mat= (this.personnel.matricule+"").substr(5,3);
  if(this.personnel!=null)
{
  this.loginU=this.personnel.prenom+mat;
  this.motpassU=this.personnel.prenom+mat;
}
}
}
