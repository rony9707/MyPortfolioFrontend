import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataBasicService {

  private dropDownvalue = new BehaviorSubject<boolean>(false);
  private dropDowntoggleClose = new BehaviorSubject<boolean>(false);

  currentValue = this.dropDownvalue.asObservable();
  currentValue2 = this.dropDowntoggleClose.asObservable();


  constructor() { }

  //Blur toggle
  dropDownToggle(value:boolean){
    this.dropDownvalue.next(value)
  }

  //Drop down toggle
  dropDownToggle2(value:boolean){
    this.dropDowntoggleClose.next(value)
  }
}
