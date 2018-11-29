import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from '../common.service';
import { PropertyBindingType } from '@angular/compiler';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateAccountComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router, private commonService: CommonService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }
  messageDisplay;
  user ={
      name: '',
      email: '',
      password: '',
      role:""
    }
    userEmpty(){
      if(this.user.email === '' || this.user.name == '' || this.user.password == ''|| this.user.role == '')
        return true;
      else
        return false;
    }

    onCreateAccount(){      

      if(!this.userEmpty()){

        this.commonService.createAccount(this.user).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
        this.user.email = '';
        this.user.name = '';
        this.user.password = '';
        this.user.role = '';
        this.messageDisplay="USER HAS BEEN CREATED"
      }  
      else
        this.messageDisplay="SOME FORMS ARE EMPTY"
    }
  ngOnInit() {}

}
