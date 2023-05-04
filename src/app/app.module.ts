import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './tabs/main-resume-components/about-me/about-me.component';
import { TabsComponent } from './tabs/tabs.component';
import { JobExperienceDescriptionComponent } from './tabs/job-description.components/job-experience-description.component';
import { ResumeComponent } from './tabs/main-resume-components/resume.component';
import { JobDescriptionsComponent } from './tabs/job-description.components/job-descriptions/job-descriptions.component';
import { EducationsComponent } from './tabs/main-resume-components/educations/educations.component';
import { ExperiencesComponent } from './tabs/main-resume-components/experiences/experiences.component';
import { PersonalInfoComponent } from './tabs/main-resume-components/personal-info/personal-info.component';
import { SkillsComponent } from './tabs/main-resume-components/skills/skills.component';
import { CertificationsComponent } from './tabs/main-resume-components/certifications/certifications.component';
import { ReferralsComponent } from './tabs/main-resume-components/referrals/referrals.component';
import { GalleryComponent } from './tabs/gallery.components/gallery.component';

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
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
