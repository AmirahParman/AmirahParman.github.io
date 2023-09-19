import { Component, OnInit } from '@angular/core';
import { jobDescription as JobDescription } from 'src/app/models/job-description';

@Component({
  selector: 'app-job-descriptions',
  templateUrl: './job-descriptions.component.html',
  styleUrls: ['./job-descriptions.component.scss']
})
export class JobDescriptionsComponent implements OnInit {
  datas: JobDescription[] = [];

  ngOnInit(): void {
    this.datas = [
      new JobDescription('TDCX', '2020-09-01', '2022-06-01', 'TDCX Malaysia', 'As an outsourced L&D personnel, I provided consultation on learning solutions for various scenarios and objectives. I successfully led and onboarded three greenfield projects in the Automotive, Retail & Electronic industries, as well as supervised an ongoing e-commerce project. Through these projects, I gained extensive experience in applying the Planning, Doing, Checking and Acting (PDCA) cycle. I also developed and implemented end-to-end L&D processes, including training roadmap and proposal, daily training agenda and modules, process mapping, L1-L4 evaluations (when applicable), training analysis and results, business reviews, workshops and refresher training. I established close relationships with clients and stakeholders to ensure alignment across all departments. Additionally, I managed a team of three trainers, a Document Control Person for ISO Audits and TNA. I was recognized with the “Never Stop Thinking” award and a Gold Certified Trainer certification.', ['Articulate 360', 'Salesforce - SalesCloud & ServiceCloud', 'TalentLMS', 'Microsoft Visio', 'Kahoot']),
      new JobDescription('LZD', '2019-02-01', '2020-08-01', 'Ecart Services Malaysia (Lazada Malaysia)', 'As an in-house trainer, I collaborated with stakeholders (Operations & QA) to ensure the Customer Satisfaction (CSAT) index for both in-house and BPO. I conducted Training Needs Analysis to identify and address the gap(s) agents faced, in partnership with the QA team. I developed and delivered training modules, and facilitated Train-The-Trainer sessions with three BPO trainers. I also handled training reporting and documentation. As Lazada was a fast-paced industry, I demonstrated proactivity and adaptability. I was responsible for campaign training, soft skills workshop, help center articles, announcements, and LMS usage (Articulate & Docebo). I participated in monthly and quarterly Business Reviews where I presented the challenges and support for BPO. I maintained a close relationship with the regional team and contributed actively to the company culture. I was also appointed as the official live show host during major campaigns.', ['Dacebo & Plato', 'TalentLMS', 'Xspace', 'Articulate360', 'DingTalk']),
      new JobDescription('STRM', '2018-09-01', '2019-02-01', 'Stream Enterprise (M) Sdn Bhd', 'As the first and sole trainer at Stream Empire, a sister company of JD Sports in Malaysia, I established the training function and developed various modules for soft skills, products, and development. I delivered effective and engaging training sessions and reported on their outcomes. This was my first experience in the retail industry.', ['iSpring', 'Canva', 'Adobe Photoshop']),
      new JobDescription('PTN', '2018-04-01', '2018-08-01', 'Proton Edar Sdn Bhd', 'I joined Proton (Automotive) to broaden my training expertise in soft skills. During my tenure, I participated in the onboarding training, developed and delivered soft skills modules and workshops, and conducted nationwide new product training.', []),
      new JobDescription('TYT', '2014-10-01', '2018-04-01', 'UMW Toyota Motor Sdn Bhd', '​Toyota was my first real job experience and I was hired as a product trainer which primarily focused on Toyota cars, products and features.  This job however, allows me to co-facilitate with a dedicated soft skills trainer which exposed me to soft skills training My audience were the Toyota Sales Advisors age ranging from 18 - 60 years old', []),
    ]
  }
}
