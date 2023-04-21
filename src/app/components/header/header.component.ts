import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerzss',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  yearNow: number = 0;
  
  ngOnInit(): void {
    this.yearNow = new Date().getFullYear();
  }
}
