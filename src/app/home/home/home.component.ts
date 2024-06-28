import { Component, OnInit, HostListener } from '@angular/core';
import { ShareDataBasicService } from 'src/app/services/share-data-basic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Declare Variables here
  windowWidth!: number;
  isToggle_phone_dropdown = false;

  constructor(private data: ShareDataBasicService) {
    this.windowWidth = window.innerWidth;
  }


  ngOnInit(): void {
    this.data.currentValue2.subscribe(message => this.isToggle_phone_dropdown=message)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = window.innerWidth;
  }


  toggleDropDown() {
    this.isToggle_phone_dropdown = !this.isToggle_phone_dropdown; // Toggle the value between true and false
  }

  

}
