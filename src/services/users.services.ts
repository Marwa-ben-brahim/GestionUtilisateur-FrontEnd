import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../model/model.user';

@Injectable()
export class UsersServices{
constructor(public http:Http) {

}
getUsers(motCle:string,page:number,size:number){
return this.http.get("http://localhost:8080/chercherUsers?mc="+motCle+"&size="+size+"&page="+page)
  .map(resp=>resp.json())
}
  getUser(id:number){
    return this.http.get("http://localhost:8080/users/"+id)
      .map(resp=>resp.json())
  }
saveUser(user:User){
    return this.http.post("http://localhost:8080/users",user)
      .map(resp=>resp.json())
  }
updateUser(user:User){
    return this.http.put("http://localhost:8080/users/"+user.id,user)
      .map(resp=>resp.json())
  }
deleteUser(id:number){
    return this.http.delete("http://localhost:8080/users/"+id)
      .map(resp=>resp.json())
  }
}
