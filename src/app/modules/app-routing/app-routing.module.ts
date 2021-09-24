import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ResumeComponent } from 'src/app/components/resume/resume.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
