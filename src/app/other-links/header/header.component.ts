import { Component, OnInit, HostListener } from '@angular/core';
import { ShareDataBasicService } from 'src/app/services/share-data-basic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  windowWidth: number;
  isToggle_phone_dropdown = false;
  blurToggle=false

  constructor(private data: ShareDataBasicService) {
    this.windowWidth = window.innerWidth;
  }

  ngOnInit(): void {
    //this.data.currentValue.subscribe(message => this.blurToggle=message)
    this.data.currentValue2.subscribe(message => this.isToggle_phone_dropdown=message)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = window.innerWidth;
  }

  toggleDropDown() {
    this.isToggle_phone_dropdown = !this.isToggle_phone_dropdown; 
    this.blurToggle = !this.blurToggle; // Toggle the value between true and false
    this.data.dropDownToggle(this.blurToggle)//Sent the data to app-link-container component
  }

}
