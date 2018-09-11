import { Etat } from "./model.etat";
import { Personnel } from "./model.personnel";

export class EtatPersonnel {
  idEtatP:number=0;
  etat:Etat;
  personnel:Personnel;
  etatInactive:string="";
  lieuDetachement:string="";
  etatInactiveAr:string="";
  lieuDetachementAr:string="";
}
