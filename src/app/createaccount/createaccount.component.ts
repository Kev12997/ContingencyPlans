import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateAccountComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  ngOnInit() {
  }

}
