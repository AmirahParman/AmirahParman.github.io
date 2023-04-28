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
      new Education('2011-07-01', '2014-09-01', 'University Technology MARA','English for Professional Communication, Business, Degree (hons)', 3.49, ['Winner at the Thailand-Indonesia-Malaysia Debate and Training Competition held in Walailak University Thailand (2013)', '3.5 above CGPA for 4 semesters of 3 years in degree'], ['Volunteer of Faculty’s Operasi Khidmat Masyarakat (2011)', 'Volunteer of Faculty’s Kasih Sayang I – IV Program (2014)','Volunteer/Committee member for English Day Program for Aston College (2013)','Faculty’s committee member'], []),
      new Education('2009-07-01', '2010-09-01', 'University Technology MARA', 'Teaching English as a Second Language', 3.24, [], [], ['English studies', 'Linguistics', 'English Literature', 'Mass Communication', 'Guidance & Counseling', 'Physiology', 'Film & Screen', 'Public Relation', 'Business Administration', 'Administrative Science']),
    ]

  }
}
