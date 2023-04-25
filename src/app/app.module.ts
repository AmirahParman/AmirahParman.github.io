import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationsComponent } from './components/educations/educations.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ExperiencesComponent,
    EducationsComponent,
    PersonalInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
