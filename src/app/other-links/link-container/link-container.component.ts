import { Component, OnInit } from '@angular/core';
import { ShareDataBasicService } from 'src/app/services/share-data-basic.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-link-container',
  templateUrl: './link-container.component.html',
  styleUrls: ['./link-container.component.css']
})
export class LinkContainerComponent implements OnInit {

  constructor(private data: ShareDataBasicService,private router: Router){
   }

  toggleBlur:boolean | undefined
  
  ngOnInit(): void {
    this.data.currentValue.subscribe(message => this.toggleBlur=message)
  }

  

}
