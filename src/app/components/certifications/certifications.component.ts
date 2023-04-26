import { Component, OnInit } from '@angular/core';
import { Certifications as Certification } from 'src/app/models/certification';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  data: Certification[] = []

  ngOnInit(): void {
    this.data = [
      new Certification('2022-01-23', ['b', 'c']),
      new Certification('2022-01-23', ['b', 'c']),
      new Certification('2022-01-23', ['b', 'c']),
      new Certification('2022-01-23', ['b', 'c']),
      new Certification('2022-01-23', ['b', 'c'])
    ]
  }


}
