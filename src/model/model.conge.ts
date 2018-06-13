import {TypeConge} from './model.typeConge';
import {Personnel} from './model.personnel';

export class Conge{
  idCong:number;
  dateDebut:Date=null;
  dateFin:Date=null;
  reprise:boolean;
  valide:string;
  typeconge:TypeConge=null;
  personnel:Personnel=null;
  nbJourRest:number;
}
