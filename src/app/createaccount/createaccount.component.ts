import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from '../common.service';

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

  user ={
      name: '',
      email: '',
      password: '',
      role:""
    }


    onCreateAccount(){      
      this.commonService.createAccount(this.user).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }
  ngOnInit() {}

}
