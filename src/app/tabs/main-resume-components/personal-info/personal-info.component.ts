import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from 'src/app/models/personal-info';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  data: PersonalInfo = new PersonalInfo('', '', '', '', false);

  ngOnInit(): void {
    this.data =
      new PersonalInfo('Stockholm', '+4768563164', 'fthnamirah@hotmail.com', 'https://www.linkedin.com/in/amirahparman/', true)
  }

}

