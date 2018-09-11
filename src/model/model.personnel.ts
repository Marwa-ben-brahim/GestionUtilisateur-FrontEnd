import {Conge} from "./model.conge";
import {Enfant} from "./model.enfant";
import {Mutation} from "./model.mutation";
import { Role } from "./model.role";
import { Etat } from "./model.etat";
import { Organisme } from "./model.organisme";

export class Personnel{
  idPers:number;
  matricule:string="";
  cin:string="";
  nom:string="";
  prenom:string="";
  adresse:string="";
  telephone:string="";
  email:string="";
  datenaissance:Date;
  lieuNaissance:string="";
  codepostal:number;
  sexe:string="";
  sexeAr:string="";
  rib:string="";
  etatCivil:string="";
  nomConjoint:string="";
  profConjoint:string="";
  nompere:string="";
  nomAr:string="";
  prenomAr:string="";
  adresseAr:string="";
  lieuNaissanceAr:string="";
  etatCivilAr:string="";
  nomConjointAr:string="";
  profConjointAr:string="";
  nompereAr:string="";
  etat:Etat;
  login:string="";
  motpasse:string="";
  conges:Array<Conge>;
  enfants:Array<Enfant>;
  mutation:Array<Mutation>;
  role:Role=new Role();
  organismeOrigine:Organisme;
  dateEntree:Date;
  gradeActuel:string;
  gradeActuelAr:string;
  societConj:string;
  societConjAr:string;
}
