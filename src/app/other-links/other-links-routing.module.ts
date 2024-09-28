import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AuthGuardService } from '../services/authguard.service';


const routes: Routes = [
  {
    path: 'about', 
    component: AboutComponent,
  },
  {
    path: 'resume', 
    component: ResumeComponent,
  },
  {
    path: 'portfolio', 
    component: PortfolioComponent,
  },
  {
    path: 'contactme', 
    component: ContactmeComponent,
    canDeactivate:[AuthGuardService]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherLinksRoutingModule { }
