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
    this.datas = [
      new Education('2020-01-01', '2021-01-01', 'Lorem Ipsum','English for Professional Communication', 3.8, ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'], ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'], []),
      new Education('2020-01-01', '2021-01-01', 'Lorem Ipsum', 'Teaching English as a Second Language', 3.8, [], [], ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.']),
    ]

  }
}
