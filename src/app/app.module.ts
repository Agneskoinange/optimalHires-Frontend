import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { EmployersComponent } from './components/employers/employers.component';
import { JobseekersComponent } from './components/jobseekers/jobseekers.component';
import { JobseekerprofileComponent } from './components/jobseekerprofile/jobseekerprofile.component';
import { EmployerprofileComponent } from './components/employerprofile/employerprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    EmployersComponent,
    JobseekersComponent,
    JobseekerprofileComponent,
    EmployerprofileComponent
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
