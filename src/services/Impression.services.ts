import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Administratif} from "../model/model.administratif";
@Injectable()
export class ImpressionServices {
  constructor(public http: Http) {
  }

  ImprimerRepriseTravail(idPers:number) {
    return this.http.get("http://localhost:8080/RepriseTravail?mc="+idPers)
      .map(resp => resp.json())
  }
  ImprimerRepriseMaladie(idCong:number) {
    return this.http.get("http://localhost:8080/RepriseConge?mc="+idCong)
      .map(resp => resp.json())
  }
  ImprimerFichePersonnel(idPers:number) {
    return this.http.get("http://localhost:8080/FichePersonnel?mc="+idPers)
      .map(resp => resp.json())
  }
  ImprimerListePersonnelDepartement(idDep:number) {
    return this.http.get("http://localhost:8080/ListeEnseignantDepartement?mc="+idDep)
      .map(resp => resp.json())
  }
  ImprimerListePersonnelGrade(idGrade:number) {
    return this.http.get("http://localhost:8080/ListeEnseignantGrade?mc="+idGrade)
      .map(resp => resp.json())
  }
  ImprimerListePersonnelCorps(idCps:number) {
    return this.http.get("http://localhost:8080/ListeEnseignantCorps?mc="+idCps)
      .map(resp => resp.json())
  }
  ImprimerListePersonnelActif() {
    return this.http.get("http://localhost:8080/ListeEnseignantActif")
      .map(resp => resp.json())
  }
  ImprimerListePersonnelInactif() {
    return this.http.get("http://localhost:8080/ListeEnseignantInactif")
      .map(resp => resp.json())
  }
}