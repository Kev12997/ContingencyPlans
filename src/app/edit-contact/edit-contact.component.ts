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
    this.commonService.getContacts().subscribe(
      (res) => {
        const resp = res.json()
        for (const contact in resp) {
         this.contacts.push(resp[contact])
        }
        this.contacts.shift()
      },
      (err) => console.log(err)
    )
  }
  contacts = [{
    emergencyTitle: '',
    entityName: '',
    entityDescription: '',
    entityPhone: '',
    entityEmail: ''
  }];
  newContact = {
    emergencyTitle: '',
    entityName: '',
    entityDescription: '',
    entityPhone: '',
    entityEmail: ''
  };
  isContactEmpty(contact) {
      // tslint:disable-next-line:max-line-length
      return (contact.emergencyTitle === '' || contact.entityName === '' || contact.entityDescription === '' || contact.entityPhone === '' || contact.entityEmail === '');
  }
  onAddContact(){
    if(this.isContactEmpty(this.newContact)){
      console.log("Some Forms are empty");
      
    } else{
      this.contacts.push(this.newContact)

      if(this.isContactEmpty(this.contacts[0])){ this.contacts.shift(); } 
      
      this.commonService.editContacts(this.contacts).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      )
      this.newContact.emergencyTitle = ''
      this.newContact.entityName = ''
      this.newContact.entityDescription = ''
      this.newContact.entityPhone = ''
      this.newContact.entityEmail = ''
    }
   
  }
  onEditContacts() {
    if(this.isContactEmpty(this.contacts[0])){ this.contacts.shift(); } 
      
      this.commonService.editContacts(this.contacts).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      )
    
  }

  ngOnInit()  {}

}
