import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  login(id:any){
    return this.http.get('https://contingencyplan-1edad.firebaseio.com/', id)
  }
  createAccount(user){
    return this.http.post('https://contingencyplan-1edad.firebaseio.com/users.json', user)
  }
}
