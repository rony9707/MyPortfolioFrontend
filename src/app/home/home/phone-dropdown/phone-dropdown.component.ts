import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ShareDataBasicService } from 'src/app/services/share-data-basic.service';


@Component({
  selector: 'app-phone-dropdown',
  templateUrl: './phone-dropdown.component.html',
  styleUrls: ['./phone-dropdown.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translate(-50%, 200px)' // Start from the bottom, adjust the Y value as needed
      })),
      transition(':enter, :leave', [
        animate('0.3s cubic-bezier(.47,1.35,.57,1.16)')
      ])
    ])
  ]
})
export class PhoneDropdownComponent implements OnInit {

  //Declare Variables here
  @Input()
  phoneDropdown: boolean = true
  toggleDropDown:boolean | undefined
  toggleBlur:boolean | undefined

  constructor(private shareData: ShareDataBasicService) { }

  ngOnInit(): void {
    //this.shareData.currentValue2.subscribe(message => this.toggleDropDown=message)
    //this.shareData.currentValue.subscribe(message => this.toggleBlur=message)
  }

  dropDown(){
    this.toggleDropDown=false
    this.shareData.dropDownToggle2(this.toggleDropDown)
    this.toggleBlur=false
    this.shareData.dropDownToggle(this.toggleBlur)
  }

}
