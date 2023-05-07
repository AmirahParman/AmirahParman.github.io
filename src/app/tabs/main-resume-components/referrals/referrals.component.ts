import { Component, OnInit } from '@angular/core';
import { Referral } from 'src/app/models/referral';
import { ReadJsonFileService } from 'src/app/services/read-json-file.service';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {
  datas: Referral[] = []

  constructor(private readJsonFileService: ReadJsonFileService) {
  }

  ngOnInit(): void {
    this.getReferralsFromJsonFile();
  }

  getReferralsFromJsonFile(): void {
    this.readJsonFileService.getReferrals().subscribe(referrals => {
      this.datas = referrals;
    });
  }
}
