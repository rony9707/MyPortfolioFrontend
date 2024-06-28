import { Component, Input, OnInit } from '@angular/core';
import { portfolio } from '../portfolio.interface'; 

@Component({
  selector: 'app-portfolio-template',
  templateUrl: './portfolio-template.component.html',
  styleUrls: ['./portfolio-template.component.css']
})
export class PortfolioTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() MyPortfolios?: portfolio;

}
