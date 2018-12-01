import {Component, OnInit} from '@angular/core';
import {CommonService} from '../common.service';

@Component({selector: 'app-view-document', templateUrl: './view-document.component.html', styleUrls: ['./view-document.component.scss']})
export class ViewDocumentComponent implements OnInit {

    constructor(common: CommonService) {
        common
            .getPlan()
            .subscribe((res) => {
                if (res.json() != null) {
                    this.seccion = res.json();
                }
            }, (err) => console.log(err));
    }

    seccion: {
        category: string,
        body: string
    };

    ngOnInit() {}
}
