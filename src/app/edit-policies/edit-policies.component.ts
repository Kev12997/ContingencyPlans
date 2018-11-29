import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, NavigationEnd } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-policies',
  templateUrl: './edit-policies.component.html',
  styleUrls: ['./edit-policies.component.scss']
})
export class EditPoliciesComponent implements OnInit {

  currentUrl: string;


  constructor(private router : Router, private commonService: CommonService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  policy={
    Policy: '',
    companyName: '',
    companyDescription: '',
    contactEmail: '',
    phone: '',
    policyNumber: '',
    policyTerm: ''
  }

  ngOnInit() {
  }

  onEditPolicies(){
    this.commonService.postEditPolicy(this.policy).subscribe(        
      (response) => console.log(response),
    (error) => console.log(error))
  }

}
