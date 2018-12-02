import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-policies-page',
  templateUrl: './policies-page.component.html',
  styleUrls: ['./policies-page.component.scss']
})
export class PoliciesPageComponent implements OnInit {

  constructor(private commonService: CommonService) {
    this.commonService.getPolicy().subscribe(
      (res) => {
      this.policies = res.json();
      console.log(this.policies);
       },
      (err) => console.log(err)
    );
   }
  policies;
  ngOnInit() {
  }

}
