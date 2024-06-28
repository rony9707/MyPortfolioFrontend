import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { ShareDataBasicService } from 'src/app/services/share-data-basic.service';

@Component({
  selector: 'app-other-links',
  templateUrl: './other-links.component.html',
  styleUrls: ['./other-links.component.css']
})
export class OtherLinksComponent implements OnInit {

  constructor(private ShareData:ShareDataBasicService, private router: Router) {
  }

  //Declare variables
  toggleBlur:boolean | undefined


  ngOnInit(): void {
    // this.ShareData.currentValue.subscribe(message => this.toggleBlur=message)
  }
  

  clickLink(){
    this.toggleBlur=false
    this.ShareData.dropDownToggle(this.toggleBlur)
  }


}
