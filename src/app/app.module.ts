import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/resume.components/about-me/about-me.component';
import { ExperiencesComponent } from './components/resume.components/experiences/experiences.component';
import { EducationsComponent } from './components/resume.components/educations/educations.component';
import { PersonalInfoComponent } from './components/resume.components/personal-info/personal-info.component';
import { SkillsComponent } from './components/resume.components/skills/skills.component';
import { CertificationsComponent } from './components/resume.components/certifications/certifications.component';
import { ReferralsComponent } from './components/resume.components/referrals/referrals.component';
import { TabsComponent } from './tabs/tabs.component';
import { JobExperienceDescriptionComponent } from './tabs/job-experience-description/job-experience-description.component';
import { ResumeComponent } from './tabs/resume/resume.component';
import { JobDescriptionsComponent } from './components/job-descriptions/job-descriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ExperiencesComponent,
    EducationsComponent,
    PersonalInfoComponent,
    SkillsComponent,
    CertificationsComponent,
    ReferralsComponent,
    TabsComponent,
    JobExperienceDescriptionComponent,
    ResumeComponent,
    JobDescriptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
