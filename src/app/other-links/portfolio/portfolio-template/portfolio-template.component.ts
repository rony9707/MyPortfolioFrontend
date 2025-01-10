import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { portfolio } from '../portfolio.interface'; 
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-portfolio-template',
  templateUrl: './portfolio-template.component.html',
  styleUrls: ['./portfolio-template.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PortfolioTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() MyPortfolios?: portfolio;

}
