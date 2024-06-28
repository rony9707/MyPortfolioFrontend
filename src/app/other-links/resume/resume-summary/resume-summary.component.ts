import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-summary',
  templateUrl: './resume-summary.component.html',
  styleUrls: ['./resume-summary.component.css']
})
export class ResumeSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutMe=`
  Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and 
  developing user-centered digital/print marketing material from initial concept to final, p
  olished deliverable.
  `

}
