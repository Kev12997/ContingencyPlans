import {
  Component,
  OnInit
} from '@angular/core';
import {
  CommonService
} from '../common.service';
import {
  Router,
  NavigationEnd
} from '@angular/router';
import {
  from
} from 'rxjs';
import {
  log
} from 'util';

@Component({
  selector: 'app-edit-policies',
  templateUrl: './edit-policies.component.html',
  styleUrls: ['./edit-policies.component.scss']
})
export class EditPoliciesComponent implements OnInit {

  currentUrl: string;
  messageDisplay: string;

  constructor(private router: Router, private commonService: CommonService) {
    router
      .events
      .subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
    this
      .commonService
      .getPolicy()
      .subscribe(
        (response) => {
          if (response.json() != null) {
            const res = response.json();
            console.log(res);
            // tslint:disable-next-line:forin
            for (const user in res) {
              this.policies.push(res[user]);
            }
            this.policies.shift();
          }
        }, (error) => console.log(error));
  }
  policy = {
    policyID: '',
    policy: '',
    companyName: '',
    companyDescription: '',
    contactEmail: '',
    phone: '',
    policyNumber: '',
    policyTerm: ''
  };

  policies = [

    {
      policyID: '',
      policy: '',
      companyName: '',
      companyDescription: '',
      contactEmail: '',
      phone: '',
      policyNumber: '',
      policyTerm: ''
    }

  ];

  ngOnInit() {}

  isPolicyEmpty(policy) {
    // tslint:disable-next-line:max-line-length
    return (policy.policyID === '' || policy.policy === '' || policy.companyName === '' || policy.companyDescription === '' || policy.contactEmail === '' || policy.phone === '' || policy.policyNumber === '' || policy.policyTerm === '');
  }

  onEditPolicies() {
    this.commonService.editPolicy(this.policies).subscribe((response) => console.log(response), (error) => console.log(error));
    this.policy.policy = '';
    this.policy.companyName = '';
    this.policy.companyDescription = '';
    this.policy.contactEmail = '';
    this.policy.phone = '';
    this.policy.policyNumber = '';
    this.policy.policyTerm = '';
  }
  onAddPolicies() {
   // tslint:disable-next-line:max-line-length
    if (this.isPolicyEmpty(this.policy)) {
      this.messageDisplay = 'SOME FORMS ARE EMPTY';
      console.log(this.messageDisplay);

    } else {
      this.policies.push(this.policy);
      if (this.isPolicyEmpty(this.policies[0])) { this.policies.shift(); }

      this.commonService.editPolicy(this.policies).subscribe((response) => console.log(response), (error) => console.log(error));
      this.policy.policyID= '';
      this.policy.policy = '';
      this.policy.companyName = '';
      this.policy.companyDescription = '';
      this.policy.contactEmail = '';
      this.policy.phone = '';
      this.policy.policyNumber = '';
      this.policy.policyTerm = '';
      this.messageDisplay = 'POLICY HAS BEEN CREATED';
    }
  }
}
