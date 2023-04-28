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
      new Referral ('Mastura', 'Manager', 'Ecart services Malaysia Sdn Bhd (Lazada Malaysia)', '+6019-2197913'),
      new Referral ('Inayat Zeb (Ezee)', 'Assistant Manager, L&D', 'TDCX Malaysia', '+6013-6677499')
    ]}
}
