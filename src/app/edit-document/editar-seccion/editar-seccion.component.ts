import { Component,  OnInit, ViewChild, ElementRef} from '@angular/core';
import {  CommonService} from '../../common.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-editar-seccion',
  templateUrl: './editar-seccion.component.html',
  styleUrls: ['./editar-seccion.component.scss']
})
export class EditarSeccionComponent implements OnInit {

  Title: string;
  Paragraph: string;

  constructor(private commonService: CommonService) {
    this.commonService.getPlan().subscribe(
      (response) => {
        if (response.json() != null) {
          this.seccion = (response.json());
        }
        console.log(this.seccion);
      },
      (error) => console.log(error)
    );
  }

  seccion = [{
    body: '',
    category: ''
  }];

  ngOnInit() {}


  onSave(index) {
    this.commonService.editPlan(this.seccion).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  onDelete(index) {
    this.seccion.splice(index, index);
    this.commonService.editPlan(this.seccion).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  newSection() {

    const temp = {
      category: '',
      body: ''
    };
    this.seccion.push(temp);

  }
}
