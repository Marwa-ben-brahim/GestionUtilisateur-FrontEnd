import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Conge} from '../model/model.conge';

@Injectable()
export class CongeServices{
  constructor(public http:Http) {

  }
  getConges(motCle:string,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherConges?mc="+motCle+"&size="+size+"&page="+page)
      .map(resp=>resp.json())
  }
  allConges(){
    return this.http.get("http://localhost:8080/conges")
      .map(resp=>resp.json())
  }
  getConge(idCong:number){
    return this.http.get("http://localhost:8080/conges/"+idCong)
      .map(resp=>resp.json())
  }
  saveConge(conge:Conge){
    return this.http.post("http://localhost:8080/Ajouterconges",conge)
      .map(resp=>resp.json())
  }
  updateConge(conge:Conge){
    return this.http.put("http://localhost:8080/ModifierConges/"+conge.idCong,conge)
      .map(resp=>resp.json())
  }
  deleteConge(idCong:number){
    return this.http.delete("http://localhost:8080/SupprimerConges/"+idCong)
      .map(resp=>resp.json())
  }
}
