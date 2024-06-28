import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactmeComponent } from './contactme/contactme.component';


const routes: Routes = [
  {
    path: 'about', // Matches '/about' directly
    component: AboutComponent,
  },
  {
    path: 'resume', // Matches '/resume' directly
    component: ResumeComponent,
  },
  {
    path: 'portfolio', // Matches '/portfolio' directly
    component: PortfolioComponent,
  },
  {
    path: 'contactme', // Matches '/contactme' directly
    component: ContactmeComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherLinksRoutingModule { }
