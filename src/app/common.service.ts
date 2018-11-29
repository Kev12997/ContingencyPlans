import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  login(id){
    return this.http.get('https://contingencyplan-1edad.firebaseio.com/users.json', id)
  }
  createAccount(user){
    return this.http.post('https://contingencyplan-1edad.firebaseio.com/users.json', user)
  }

  getAccounts(credentials){
    return this.http.get('https://contingencyplan-1edad.firebaseio.com/users.json?user==${credential.email}')
  }

  postEditPolicy(policy){
    return this.http.post('https://contingencyplan-1edad.firebaseio.com/users.json', policy)
  }

  postEditContact(contact){
    return this.http.post('https://contingencyplan-1edad.firebaseio.com/users.json', contact)
  }
}
