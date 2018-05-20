import {Personnel} from './model.personnel';
import {PosteAdministrative} from './model.posteAdministrative';


export class Periode {
  id:number=0;
  dateDebut:Date=null;
  dateFin:Date=null;
  personnel:Personnel=null;
  posteAdmin:PosteAdministrative=null;
}
