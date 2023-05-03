import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { JobExperienceDescriptionComponent } from './tabs/job-experience-description/job-experience-description.component';
import { ResumeComponent } from './tabs/resume/resume.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '', redirectTo: 'resume', pathMatch: 'full' }
  , { path: 'job-experience', component: JobExperienceDescriptionComponent }
  , { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
