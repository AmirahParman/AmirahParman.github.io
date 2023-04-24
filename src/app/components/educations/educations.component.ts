import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {
  datas: Education[] = [];

  ngOnInit(): void {
    this.datas=[
      new Education('2020-01-01', '2021-01-01','UiTM', 3.8,['achievement 1', '2', '3'], ['volunteer', 'hello','volunteer 3'], ['EPC','subject2','subject 3']),
      new Education('2020-01-01', '2021-01-01','UiTM', 3.8,['achievement 1', '2', '3'], ['volunteer 1', '2', '3'], ['EPC','subject2','subject 3']),
    ]

  }
}
 