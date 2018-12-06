 import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-quick-response',
  templateUrl: './quick-response.component.html',
  styleUrls: ['./quick-response.component.scss']
})
export class QuickResponseComponent implements OnInit {

  constructor(commonservice:CommonService) { 
    commonservice.getContacts().subscribe(
      (res) => this.contacts=res.json(),
      (err) => console.log(err)
    )
  }

  ngOnInit() {
  }
  // contacts = {
  //   emergencyTitle: '',
  //   entityName: '',
  //   entityDescription: '',
  //   entityPhone: '',
  //   entityEmail: ''
  // };
  // tslint:disable-next-line:member-ordering
  contacts: {
    emergencyTitle: string;
    entityPhone: string;
    entityName: string;
    entityEmail: string;
    entityDescription: string;

  }[] = [
    {
      emergencyTitle: 'In case of order violation:',
      entityDescription: 'Police Department of San Juan',
      entityPhone: '911',
      entityEmail: 'policia@gmail.com',
      entityName: 'Police'
    },
    {
      emergencyTitle: 'In case of System failure:',
      entityName: 'System Zayira Jordan, Ph. D.',
      entityDescription: 'Administrator',
      entityPhone: '939-354-2863',
      entityEmail: 'zjordanconde@gmail.com'
    },
    {
      emergencyTitle: 'N/A',
      entityName: 'Josean Ayala, Ph. D.',
      entityDescription: 'Software Engineer',
      entityPhone: '939-520-3620',
      entityEmail: 'josean.ayala@upr.edu'
    },
    {
      emergencyTitle: 'In case of System bugs:',
      entityName: 'Josean Ayala, Ph. D.',
      entityDescription: 'Software Engineer',
      entityPhone: '939-520-3620',
      entityEmail: 'josean.ayala@upr.edu'
    },
    {
      emergencyTitle: 'N/A',
      entityName: 'Ramon Medina, Bs',
      entityDescription: 'Software Engineer',
      entityPhone: '787-244-1205',
      entityEmail: 'ramon.medina2@u pr.edu'
    },
  ];

}
