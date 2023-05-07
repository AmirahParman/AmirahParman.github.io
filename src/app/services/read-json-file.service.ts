import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Referral } from '../models/referral';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonFileService {
  constructor(private httpClient: HttpClient) { }

  getReferrals(): Observable<Referral[]> {
    return this.httpClient.get<Referral[]>('/assets/data/referrals.json')
      .pipe(map(res => res));
  }
}
