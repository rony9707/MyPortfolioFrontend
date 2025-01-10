import { Component, OnInit } from '@angular/core';
import { skills } from './about-skill.interface';


@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.css']
})
export class AboutSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  skills: skills = {
    html: {
      description: 'HTML',
      percentage: 95,
    },
    css: {
      description: 'CSS',
      percentage: 90,
    },
    angular: {
      description: 'Angular',
      percentage: 80,
    },
    powershell: {
      description: 'Powershell',
      percentage: 60,
    },
    MSSQL: {
      description: 'MSSQL / PLSQL',
      percentage: 90,
    },
    RestApi: {
      description: 'RestApi',
      percentage: 80,
    },
    node: {
      description: 'Node Js',
      percentage: 70,
    },
    python: {
      description: 'Python',
      percentage: 60,
    }
  };

  //convert this.skills to array which has all the important metrices
  getMetricKeys(): (keyof skills)[] {
    return Object.keys(this.skills) as (keyof skills)[];
  }
}
