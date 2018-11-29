import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router, private commonService: CommonService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  contact={
    emergencyTitle: '',
    entityName: '',
    entityDescription: '',
    entityPhone: '',
    contactEmail: ''
  }


  ngOnInit()  {} 

  onEditContact(){
    this.commonService.postEditContact(this.contact).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
