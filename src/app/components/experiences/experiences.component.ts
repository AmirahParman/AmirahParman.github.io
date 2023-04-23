import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/resume';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  datas: Experience[] = [];

  ngOnInit(): void {
    this.datas = [
      new Experience('2020-09-01', '2022-06-01', 'Senior Learning & Development Expert', 'TDCX Malaysia', ['Manages trainers & training related activities', 'Lead for multiple projects', 'Lead for L&D business review with clients', 'L&D key person for onboarding of a new project', 'Modules developer', 'Process developer', 'Person in charge for ISO audits', 'Main trainer for Soft Skills training(project based)', 'Key person to liaise with Operations, Business Analyst & Quality Assurance on improvement plans', 'TDCX Gold Certified Trainer', 'Winner of TDCX Emerging Champion Award', '1 of 4 panel speakers for Managing Self', 'Guest speaker for EMO TALK'], ['BPO', 'e-Commerce', 'Automotive', 'Retail']),
      new Experience('2019-02-01', '2020-08-01', 'Senior Learning & Development Expert', 'TDCX Malaysia', ['Manages trainers & training related activities', 'Lead for multiple projects', 'Lead for L&D business review with clients', 'L&D key person for onboarding of a new project', 'Modules developer', 'Process developer', 'Person in charge for ISO audits', 'Main trainer for Soft Skills training(project based)', 'Key person to liaise with Operations, Business Analyst & Quality Assurance on improvement plans', 'TDCX Gold Certified Trainer', 'Winner of TDCX Emerging Champion Award', '1 of 4 panel speakers for Managing Self', 'Guest speaker for EMO TALK'],['e-Commerce']),
      new Experience('2018-09-01', '2019-02-01', 'Senior Learning & Development Expert', 'TDCX Malaysia', ['Manages trainers & training related activities', 'Lead for multiple projects', 'Lead for L&D business review with clients', 'L&D key person for onboarding of a new project', 'Modules developer', 'Process developer', 'Person in charge for ISO audits', 'Main trainer for Soft Skills training(project based)', 'Key person to liaise with Operations, Business Analyst & Quality Assurance on improvement plans', 'TDCX Gold Certified Trainer', 'Winner of TDCX Emerging Champion Award', '1 of 4 panel speakers for Managing Self', 'Guest speaker for EMO TALK'],['Retail']),
      new Experience('2018-04-01', '2018-08-01', 'Senior Learning & Development Expert', 'TDCX Malaysia', ['Manages trainers & training related activities', 'Lead for multiple projects', 'Lead for L&D business review with clients', 'L&D key person for onboarding of a new project', 'Modules developer', 'Process developer', 'Person in charge for ISO audits', 'Main trainer for Soft Skills training(project based)', 'Key person to liaise with Operations, Business Analyst & Quality Assurance on improvement plans', 'TDCX Gold Certified Trainer', 'Winner of TDCX Emerging Champion Award', '1 of 4 panel speakers for Managing Self', 'Guest speaker for EMO TALK'],['Automotive']),
      new Experience('2014-10-01', '2018-04-01', 'Senior Learning & Development Expert', 'TDCX Malaysia', ['Manages trainers & training related activities', 'Lead for multiple projects', 'Lead for L&D business review with clients', 'L&D key person for onboarding of a new project', 'Modules developer', 'Process developer', 'Person in charge for ISO audits', 'Main trainer for Soft Skills training(project based)', 'Key person to liaise with Operations, Business Analyst & Quality Assurance on improvement plans', 'TDCX Gold Certified Trainer', 'Winner of TDCX Emerging Champion Award', '1 of 4 panel speakers for Managing Self', 'Guest speaker for EMO TALK'],['Automotive']),
    ]
  }
}
