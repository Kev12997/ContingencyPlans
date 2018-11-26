import {  Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

  constructor() {}

  ChangeReports: any[] = [{
      name: 'Zayira',
      role: 1,
      category: 'Contingency Plan: Introduction',
      time: '2018-09-09 15:00'
    },
    {
      name: 'Josean',
      role: 2,
      category: 'Contingency Plan: Plan Description',
      time: '2018-09-09 14:00'
    }
  ];

  ngOnInit() {}

  predicateBy(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }
  onSort(property: string) {
    this.ChangeReports.sort(this.predicateBy(property));
  }

}
