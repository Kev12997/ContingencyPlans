import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, NavigationEnd } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  currentUrl: string;


  constructor(private router : Router, private commonService: CommonService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }
  users;
  credential ={
    email: '',
    password: ''
  }
  
  ngOnInit() {
  }

  onSignIn(){
    this.commonService.getAccounts(this.credential).subscribe(        
      (response : Response) => {
        this.users = response.json();
        console.log(this.users)
      },
    (error) => console.log(error));
  }

}
