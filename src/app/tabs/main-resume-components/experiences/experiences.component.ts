import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  datas: Experience[] = [];

  ngOnInit(): void {
    this.datas = [
      new Experience('2023-10-23', '', 'Digital Learning & Development Specialist', 'Piab AB, Sweden', 'Piab', ['Main module developer for Vacuum Automation division', 'Articulate & SANA module developer', 'Key person to liaise with Subject Matter Expert', 'Manages and troubleshoots LMS', 'Established Learning & Development Framework', 'Globalized Learning Content'], ['Automation', 'Robotic']),
      new Experience('2020-09-01', '2022-06-01', 'Senior Learning & Development Expert', 'TDCX Malaysia', 'TDCX', ['Manages trainers & training related activities', 'Lead for multiple projects', 'Lead for L&D business review with clients', 'L&D key person for onboarding of a new project', 'Modules developer', 'Process developer', 'Person in charge for ISO audits', 'Main trainer for Soft Skills training(project based)', 'Key person to liaise with Operations, Business Analyst & Quality Assurance on improvement plans', 'TDCX Gold Certified Trainer', 'Winner of TDCX Emerging Champion Award', '1 of 4 panel speakers for Managing Self', 'Guest speaker for EMO TALK'], ['BPO', 'e-Commerce', 'Automotive', 'Retail']),
      new Experience('2019-02-01', '2020-08-01', 'Associate, Trainer', 'Ecart Services Sdn Bhd (Lazada Malaysia)', 'LZD', ['Customer Service (Buyer) Trainer - Product, SOP (process), Softskills, Systems & Campaign training', 'Manages 3 trainers from BPO', 'Key person in Buyer Help Centre articles', 'Trainer for QA’s analysis', 'Module developer & enhancer for all modules', 'Lazada Live official host', 'Articulate & Dacebo module developer person in charge', 'In charge of end to end training process (PDCA L1-L4 Evaluation)', 'Main CS trainer for Lazada Malaysia in liase with Regional', 'Key trainer to liaise with Strategic Business Plan Department (SBP) for SOP improvements', 'Person in charge for system improvement (SOP 2.0)', 'In charge of TNA for training requirement'], ['e-Commerce']),
      new Experience('2018-09-01', '2019-02-01', 'Executive, Trainer', 'Stream Enterprise (M) Sdn Bhd', 'STRM', ['First trainer of company', 'Module developer', 'Trainer & in-charge of Customer Service Training', 'Trainer & in-charge of Soft skills Training', 'Trainer & in-charge of Development Training', 'Trainer & in-charge of Product Training', 'Key person for all evaluation from L1-L4 Evaluation',], ['Retail']),
      new Experience('2018-04-01', '2018-08-01', 'Executive, Sales Trainer', 'Proton Edar Sdn Bhd', 'PTN', ['In-charge of soft-skills training – Induction Program and National Sales Certification Program (NSCP)', 'Key person for Nationwide Sales Advisors Training Need Analysis (TNA)', 'Event Emcee', 'Product Training – New Model Launch, Competitor’s Comparison, Minor Change', 'Product and soft-skills coaching nationwide'], ['Automotive']),
      new Experience('2014-10-01', '2018-04-01', 'Executive, Product Trainer', 'UMW Toyota Motor Sdn Bhd', 'TYT', ['Trainer for Sales Advisor Development Program (SADP), New Product, Competitors comparison Training & Fleet Training', 'Trainer for Soft-skills Training – Smart Selling Skills, Towards Operational Excellence (TOE)', 'Document Control Person for ISO 9001:2008', 'Person-In-Charge for Development Training', 'Person in Charge for Sales Advisors Education Assessment (SEA) Exam for frontliners', 'Company emcee for Quality Control Circle (QCC) Convention', 'Special Project person for dealerization of branches'], ['Automotive']),
    ]
  }
}
