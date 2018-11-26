import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  foundContact: boolean;

  constructor() { }

  ngOnInit() {
    this.foundContact = true;
  }

}
