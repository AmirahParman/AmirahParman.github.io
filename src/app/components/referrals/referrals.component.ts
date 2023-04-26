import { Component, OnInit } from '@angular/core';
import { Referral } from 'src/app/models/referral';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {
  datas: Referral[] = []

  ngOnInit(): void {
    this.datas = [
      new Referral ('This Person', 'Manager', 'Lazada MY', '0147231860'),
      new Referral ('This Person', 'Manager', 'Lazada MY', '0147231860')
    ]}
}
