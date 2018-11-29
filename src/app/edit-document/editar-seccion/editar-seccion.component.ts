import { Component,  OnInit} from '@angular/core';
import {  CommonService} from '../../common.service';

@Component({
  selector: 'app-editar-seccion',
  templateUrl: './editar-seccion.component.html',
  styleUrls: ['./editar-seccion.component.scss']
})
export class EditarSeccionComponent implements OnInit {
  constructor(private commonService: CommonService) {
    this.commonService.getPlan().subscribe(
      (response) => {
        if (response.json() != null)
          this.seccion = (response.json())
        console.log(this.seccion);
      },
      (error) => console.log(error)
    )
  }

  ngOnInit() {}

  seccion = [{
    body: '',
    category: ''
  }]


  onSave(index) {
    this.commonService.editPlan(this.seccion).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  onDelete(index) {
    this.seccion.splice(index, index)
    this.commonService.editPlan(this.seccion).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }
  newSection() {
   
    var temp = {
      category: '',
      body: ''
    }
    this.seccion.push(temp)

  }
}
