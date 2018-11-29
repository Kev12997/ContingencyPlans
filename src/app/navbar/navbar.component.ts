import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUrl: string;
  logged;
  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
    this.logged = localStorage.getItem('logged') === 'true'
    console.log(this.logged);
    
  }
  onLogOut(){
    localStorage.removeItem('logged')
    window.location.reload()
  }
  ngOnInit() {
  }

}
