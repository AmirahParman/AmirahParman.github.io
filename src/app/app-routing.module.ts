import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { JobExperienceDescriptionComponent } from './tabs/job-description.components/job-experience-description.component';
import { ResumeComponent } from './tabs/main-resume-components/resume.component';
import { GalleryComponent } from './tabs/gallery.components/gallery.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '', redirectTo: 'resume', pathMatch: 'full' }
  , { path: 'job-experience', component: JobExperienceDescriptionComponent }
  , { path: 'resume', component: ResumeComponent }
  , { path: 'gallery', component: GalleryComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
