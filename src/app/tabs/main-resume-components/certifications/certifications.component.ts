import { Component, OnInit } from '@angular/core';
import { Certifications as Certification } from 'src/app/models/certification';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = []

  ngOnInit(): void {
    this.certifications = [
      new Certification('2021-12', ['Certified Gold Trainer (TDCX)']),
      new Certification('2021-06', ['TDCX Certified Silver Trainer']),
      new Certification('2019-11', ['Lean Six Sigma White Belt']),
      new Certification('2015-12', ['Ms.Excel Intermediate', 'Train-The-Trainer']),
      new Certification('2015-03', ['ISO 900:2008 Analysis & Interpretation Training', 'ISO 900:2008 Awareness Training']),
      new Certification('2014-12', ['Professional Work Ethics', 'SAMP Defense & Safety Driving Course']),
      new Certification('2015-04', ['Basic Occupational First Aid, CPR & AED Training', 'How to design & Develop Effective Training (DETP)'])

    ]
  }


}
