 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-response',
  templateUrl: './quick-response.component.html',
  styleUrls: ['./quick-response.component.scss']
})
export class QuickResponseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  telephones: {
    reason: string;
    contacphone: string;
    contactname: string;
    contactemail: string;
    contacttitle: string;

  }[] = [
    {
      reason: 'In case of order violation:',
      contacttitle: 'Police Department of San Juan',
      contacphone: '911',
      contactemail: 'policia@gmail.com',
      contactname: 'Police'
    },
    {
      reason: 'In case of System failure:',
      contactname: 'System Zayira Jordan, Ph. D.',
      contacttitle: 'Administrator',
      contacphone: '939-354-2863',
      contactemail: 'zjordanconde@gmail.com'
    },
    {
      reason: 'N/A',
      contactname: 'Josean Ayala, Ph. D.',
      contacttitle: 'Software Engineer',
      contacphone: '939-520-3620',
      contactemail: 'josean.ayala@upr.edu'
    },
    {
      reason: 'In case of System bugs:',
      contactname: 'Josean Ayala, Ph. D.',
      contacttitle: 'Software Engineer',
      contacphone: '939-520-3620',
      contactemail: 'josean.ayala@upr.edu'
    },
    {
      reason: 'N/A',
      contactname: 'Ramon Medina, Bs',
      contacttitle: 'Software Engineer',
      contacphone: '787-244-1205',
      contactemail: 'ramon.medina2@upr.edu'
    },
  ];

}
