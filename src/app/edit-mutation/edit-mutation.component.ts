import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Mutation} from '../../model/model.mutation';
import {MutationServices} from '../../services/Mutation.services';
import {Personnel} from '../../model/model.personnel';
import {TypeMutation} from '../../model/model.typeMutation';
import {TypeMutationsServices} from '../../services/typeMutation.services';
import {UsersServices} from '../../services/users.services';

@Component({
  selector: 'app-edit-mutation',
  templateUrl: './edit-mutation.component.html',
  styleUrls: ['./edit-mutation.component.css']
})
export class EditMutationComponent implements OnInit {
  mutation:Mutation=new Mutation();
  mutations:Array<Mutation>=new Array<Mutation>();
  personnels:Array<Personnel>=new Array<Personnel>();
  personnel:Personnel=new Personnel();
  typeMutation:TypeMutation;
  typeMutations:Array<TypeMutation>=new Array<TypeMutation>();
  id_mut:number=0;
  constructor(public activatedRoute:ActivatedRoute,
              public typeMutationServices:TypeMutationsServices,
              private mutationService:MutationServices,
              private userservices:UsersServices,
              public router:Router) {
    this.id_mut=activatedRoute.snapshot.params['idMut'];
  }

  ngOnInit() {
    this.AfficherPersonnel();
    this.chercherType();
    this.mutationService.getMutation(this.id_mut)
      .subscribe(data=> {
        this.mutation = data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }
  AfficherPersonnel()
  {
    this.userservices.getAllPersonnel()
      .subscribe(data=>{
        this.personnels=data;
        console.log(data);
      },err=>{
        console.log(err);
      });
  }
  chercherType()
  {
    this.typeMutationServices.allTypesMutations()
      .subscribe(data=>{
        this.typeMutations=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
  }
  updateMutation(){
    this.mutationService.updateMutation(this.mutation)
      .subscribe(data=>{
        console.log(data);
        alert("Mise à jour effectuée");
        this.router.navigate(['mutation']);
      },err=>{
        console.log(err);
        alert("Probléme");
      })
  }


}
