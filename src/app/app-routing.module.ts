import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobExperienceDescriptionComponent } from './tabs/job-experience-description/job-experience-description.component';
import { ResumeComponent } from './tabs/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: 'resume', pathMatch: 'full' }
  , { path: 'job-experience', component: JobExperienceDescriptionComponent }
  , { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
