import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, NavigationEnd } from '@angular/router'
import {Response } from '@angular/http';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  currentUrl: string;
 
  constructor(private router : Router, private commonService: CommonService) {
 
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);

    this.commonService.getAccounts().subscribe(        
      (response :Response) => {
        var res = response.json();
        for (const user in res)             
            this.users.push(res[user]);
        console.log(this.users)
      },
     (error) => console.log(error));
  }

  users : [{
    email: string,
    name:string, 
    password:string,
    role:string
    }] = [
      {
        email: '',
        name: '', 
        password: '',
        role: ''
      }];

  credential ={
    email: '',
    password: ''
  }
  LoggedIn=false;
 
  onSignIn(){    
    this.users.forEach(element => {
      if (this.credential.email === element.email && this.credential.password === element.password){
        this.LoggedIn=true;
        localStorage.setItem("logged", this.LoggedIn.toString());
      }
       
        
     });
  }

  ngOnInit() {
  }

}
