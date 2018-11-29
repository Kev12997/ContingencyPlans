import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  createAccount(user){
    return this.http.post('https://contingencyplan-1edad.firebaseio.com/users.json', user)
  }

  getAccounts(){
    return this.http.get('https://contingencyplan-1edad.firebaseio.com/users.json')
  }
  
  postEditPolicy(policy){ 
    return this.http.post('https://contingencyplan-1edad.firebaseio.com/users.json', policy)
  }

  postEditContact(contact){
    return this.http.post('https://contingencyplan-1edad.firebaseio.com/users.json', contact)
  }
  editPlan(data){
    return this.http.put('https://contingencyplan-1edad.firebaseio.com/plan.json', data)
  }
  getPlan(){
    return this.http.get('https://contingencyplan-1edad.firebaseio.com/plan.json')
  }
}
