import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {DemandeVacation} from "../model/model.demandeVacation";
@Injectable()
export class DemandeVacationServices {
  constructor(public http: Http) {
  }

  getDemandeVacations(motcle:string, page: number, size: number) {
    return this.http.get("http://localhost:8080/chercherdemandeVacation?mc="+motcle+"&size=" + size + "&page=" + page)
      .map(resp => resp.json())
  }

  getDemandeVacation(cin: number) {
    return this.http.get("http://localhost:8080/demandeVacation/" +cin)
      .map(resp => resp.json())
  }

  saveDemandeVacation(demandeVacation: DemandeVacation) {
    return this.http.post("http://localhost:8080/addDemandeVac", demandeVacation)
      .map(resp => resp.json())
  }

  updateDemandeVacation(demandeVacation: DemandeVacation) {
    return this.http.put("http://localhost:8080/ModifierdemandeVacation/" + demandeVacation.cin, demandeVacation)
      .map(resp => resp.json())
  }

  deleteDemandeVacation(cin: number) {
    return this.http.delete("http://localhost:8080/SupprimerdemandeVacation/"+cin)
      .map(resp => resp.json())
  }
  getAllDemandeVacations() {
    return this.http.get("http://localhost:8080/demandeVacations")
      .map(resp => resp.json())
  }
}
