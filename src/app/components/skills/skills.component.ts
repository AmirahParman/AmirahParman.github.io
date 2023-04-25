import { Component, OnInit } from '@angular/core';
import { skills } from 'src/app/models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  data: skills = new skills([])

  ngOnInit(): void {
    this.data =
      new skills(["Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text", "Lorem Ipsum is simply dummy text"])
  }
}