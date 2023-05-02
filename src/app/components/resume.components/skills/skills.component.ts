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
      new skills(['Soft Skills', 'Training Delivery','Microsoft Offices','BPO Learning Management', 'Learning Management System', 'Coaching','Event Planning', 'Program Management', 'Customer Service', 'Workshop', 'Data Analysis', 'Microsoft Offices', 'Exam Questions', 'Customer & Staff Relations', 'Teaching', 'Research & Analysis', 'Project Management', 'Process Improvements', 'Consulting', 'Onboarding'  ])
  }
}