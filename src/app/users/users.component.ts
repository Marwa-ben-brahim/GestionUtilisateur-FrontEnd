import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {UsersServices} from '../../services/users.services';
import {Router} from '@angular/router';
import {User} from '../../model/model.user';
@Component({
  selector: 'app-u',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
pageUsers:any;
motCle:string="";
currentPage:number=0;
pages:Array<number>;
size:number=5;
  constructor(public http:Http, public usersservices:UsersServices, public router:Router) {}

  ngOnInit() {

  }
  doSearch(){
    this.usersservices.getUsers(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        this.pageUsers=data;
        this.pages=new Array(data.totalPages);
      },err=>{
        console.log(err);
      })
  }
  chercher()
  {
   this.doSearch();
  }
  gotopage(i:number)
  {
this.currentPage=i;
this.doSearch();
  }
  onEditUser(id:number){
this.router.navigate(['editUser',id]);
  }
  onDeleteUser(u:User){
    let confirm=window.confirm("Est vous sûre?");
    if(confirm==true)
    {
      this.usersservices.deleteUser(u.id)
        .subscribe(data=> {
          this.pageUsers.content.splice(
            this.pageUsers.content.indexOf(u),1
          );
        },err=>{
          console.log(err);
        })
    }
  }
}
