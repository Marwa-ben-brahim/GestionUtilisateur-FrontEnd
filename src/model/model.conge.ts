import {TypeConge} from './model.typeConge';
import {Personnel} from './model.personnel';

export class Conge{
  idCong:number=0;
  dateDebut:Date=null;
  dateFin:Date=null;
  reprise:boolean;
  valide:boolean;
  typeconge:TypeConge=null;
  personnel:Personnel=null;
}
