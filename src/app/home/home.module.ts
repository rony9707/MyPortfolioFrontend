import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NameAndAboutComponent } from './home/name-and-about/name-and-about.component';
import { OtherLinksComponent } from './home/other-links/other-links.component';
import { PhoneDropdownComponent } from './home/phone-dropdown/phone-dropdown.component';
import { SocialLinksComponent } from './home/social-links/social-links.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    NameAndAboutComponent,
    OtherLinksComponent,
    PhoneDropdownComponent,
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NameAndAboutComponent,
    OtherLinksComponent,
    PhoneDropdownComponent,
    SocialLinksComponent
  ]
})
export class HomeModule { }
