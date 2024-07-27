import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeModule } from '../home/home.module';
import { LinkContainerComponent } from './link-container/link-container.component';
import { ContainerHeaderComponent } from './container-header/container-header.component';
import { ContainerTitleComponent } from './container-title/container-title.component';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { AboutMainPfpComponent } from './about/about-main/about-main-pfp/about-main-pfp.component';
import { AboutMainTextComponent } from './about/about-main/about-main-text/about-main-text.component';
import { AboutMetricsComponent } from './about/about-metrics/about-metrics.component';
import { MetricTemplateComponent } from './about/about-metrics/metric-template/metric-template.component';
import { SkillTemplateComponent } from './about/about-skills/skill-template/skill-template.component';
import { AboutSkillsComponent } from './about/about-skills/about-skills.component';
import { InterestsComponent } from './about/interests/interests.component';
import { MusicControllerComponent } from './about/interests/music-controller/music-controller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ResumeSummaryComponent } from './resume/resume-summary/resume-summary.component';
import { ResumeEducationComponent } from './resume/resume-education/resume-education.component';
import { ResumeProExperienceComponent } from './resume/resume-pro-experience/resume-pro-experience.component';
import { DownloadResumeComponent } from './resume/download-resume/download-resume.component';
import { PortfolioTemplateComponent } from './portfolio/portfolio-template/portfolio-template.component';
import { SelectedProjectComponent } from './portfolio/selected-project/selected-project.component';
import { OtherLinksRoutingModule } from './other-links-routing.module';
import { ContactmeInfoComponent } from './contactme/contactme-info/contactme-info.component';
import { ConnectWithMeComponent } from './contactme/connect-with-me/connect-with-me.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ContactmeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    LinkContainerComponent,
    ContainerHeaderComponent,
    ContainerTitleComponent,
    AboutMainComponent,
    AboutMainPfpComponent,
    AboutMainTextComponent,
    AboutMetricsComponent,
    MetricTemplateComponent,
    AboutSkillsComponent,
    SkillTemplateComponent,
    InterestsComponent,
    MusicControllerComponent,
    FooterComponent,
    ResumeSummaryComponent,
    ResumeEducationComponent,
    ResumeProExperienceComponent,
    DownloadResumeComponent,
    PortfolioTemplateComponent,
    SelectedProjectComponent,
    ContactmeInfoComponent,
    ConnectWithMeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OtherLinksRoutingModule,
    HomeModule,
    ReactiveFormsModule
  ],
  exports:[
  ]
})
export class OtherLinksModule { }
