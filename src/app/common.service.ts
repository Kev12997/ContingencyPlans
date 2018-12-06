import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  createAccount(user) {
    return this.http.post('https://contingencyplan-1edad.firebaseio.com/users.json', user);
  }
  getAccounts() {
    return this.http.get('https://contingencyplan-1edad.firebaseio.com/users.json');
  }
  editPlan(data) {
    return this.http.put('https://contingencyplan-1edad.firebaseio.com/plan.json', data);
  }
  getPlan() {
    return this.http.get('https://contingencyplan-1edad.firebaseio.com/plan.json');
  }
  getPolicy() {
    return this.http.get('https://contingencyplan-1edad.firebaseio.com/policies.json');
  }
  editPolicy(policies) {
    return this.http.put('https://contingencyplan-1edad.firebaseio.com/policies.json', policies);
  }
  getContacts() {
    return this.http.get('https://contingencyplan-1edad.firebaseio.com/contacts.json')
  }
  editContacts(contacts) {
    return this.http.put('https://contingencyplan-1edad.firebaseio.com/contacts.json', contacts)
  }
}
