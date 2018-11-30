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
  messageDisplay : string;

  constructor(private router : Router, private commonService: CommonService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  policy = {
    policyID: '',
    Policy: '',
    companyName: '',
    companyDescription: '',
    contactEmail: '',
    phone: '',
    policyNumber: '',
    policyTerm: ''
  };

  policyEdit  = {
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

  userEmpty(){

    if(this.policy.policyID === '' || this.policy.Policy == '' || this.policy.companyName == ''|| this.policy.companyDescription || this.policy.contactEmail == '' || this.policy.phone == '' || this.policy.policyNumber == ''|| this.policy.policyTerm)
      return true;
    else
      return false;
  }

  onAddPolicies(){

    if(!this.userEmpty()){
        this.commonService.postAddPolicy(this.policy).subscribe(        
          (response) => console.log(response),
        (error) => console.log(error));
        this.policy.policyID = '';
        this.policy.Policy = '';
        this.policy.companyName = '';
        this.policy.companyDescription = '';
        this.policy.contactEmail = '';
        this.policy.phone = '';
        this.policy.policyNumber = '';
        this.policy.policyTerm = '';
        this.messageDisplay="POLICY HAS BEEN CREATED"

      }
    else
    this.messageDisplay="SOME FORMS ARE EMPTY"
}
    

  onSearchPolicies(){

  }

  onEditPolicies(){
    if(!this.userEmpty()){
      this.commonService.postEditPolicy(this.policyEdit).subscribe(        
        (response) => console.log(response),
      (error) => console.log(error));
      this.policyEdit.Policy = "";
      this.policyEdit.companyName = '';
      this.policyEdit.companyDescription = '';
      this.policyEdit.contactEmail = '';
      this.policyEdit.phone = '';
      this.policyEdit.policyNumber = '';
      this.policyEdit.policyTerm = '';
      this.messageDisplay="POLICY HAS BEEN CREATED"

    }
  else
  this.messageDisplay="SOME FORMS ARE EMPTY"
  }

}
