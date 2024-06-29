import { Component, OnInit  } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { portfolio, MyPortfolios } from './portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('scaleIn', [
      state('void', style({
        transform: 'scale(0)',
        opacity: 0,
        transformOrigin: 'center center'
      }),),
      state('*', style({
        transform: 'scale(1)',
        opacity: 1,
        transformOrigin: '{{transformOriginX}}px {{transformOriginY}}px'
      }), { params: { transformOriginX: 0, transformOriginY: 0 }}),
      transition('void => *', [
        animate('700ms ease-in')
      ]),
      transition('* => void', [
        animate('700ms ease-out', style({
          transform: 'scale(0)',
          opacity: 0
        }))
      ])
    ]),
    trigger('scaleOut', [
      state('*', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('void', style({
        transform: 'scale(0)',
        opacity: 0
      })),
      transition('* => void', [
        animate('700ms ease-in')
      ]),
      transition('void => *', [
        animate('700ms ease-out', style({
          transform: 'scale(1)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  selectedProject: portfolio | undefined;
  transformOriginX: number = 0;
  transformOriginY: number = 0;

  selectProjectLocation(event: MouseEvent, metricKey: keyof MyPortfolios) {
    this.transformOriginX = event.clientX;
    this.transformOriginY = event.clientY;
    this.selectedProject = this.MyPortfolioObject[metricKey];
  }
  

  closeSelectedProject() {
    this.selectedProject = undefined;
  }

  MyPortfolioObject: MyPortfolios = {
    Project1: {
      projectName: 'Login, Registration, Shooting Game and Paint',
      imageLink: 'assets/img/myProjects/LoginRegistration.JPG',
      progress: 'Completed',
      githubLink: 'https://github.com/rony9707/myMyself_F',
      projectURL: 'https://bymyself01-b55df.web.app',
      description: 'This project is a login registration website which also has a paint tool and also a shooting game with a scoreboard.',
      technologiesUsed: 'Angular, HTML, CSS, TS, Node js, Express js, Mongo DB',
      projectDate: '05/12/2023'
    },
    Project2: {
      projectName: 'My Portfolio',
      imageLink: 'assets/img/myProjects/MyResume.JPG',
      progress: 'Completed',
      githubLink: 'https://github.com/rony9707/MyPortfolioFrontend',
      projectURL: 'https://my-portfolio-1b0d8.web.app',
      description: 'This project is my portfolio website which has all my skills and my basic about me and has the ways to contact me.',
      technologiesUsed: 'Angular, HTML, CSS, TS, Node js, Express js, Mongo DB',
      projectDate: '08/06/2024'
    },
    Project3: {
      projectName: 'My Project Navigator',
      imageLink: 'assets/img/myProjects/MyProjectNavigator.JPG',
      progress: 'Completed',
      githubLink: 'https://github.com/rony9707/STARTUP-PAGE',
      projectURL: 'Not Hosted',
      description: 'This project is made to make my life easier in XTEL project in Capgemini. All the important links and tools are made to make my navigation easier.',
      technologiesUsed: 'HTML, CSS, JS',
      projectDate: '05/04/2023'
    },
    Project4: {
      projectName: 'Electric Bill Payment System',
      imageLink: 'assets/img/myProjects/ElectricBillPaymentSystem.jpg',
      progress: 'Completed',
      githubLink: 'https://github.com/rony9707/ElectricBillPaymentSystem',
      projectURL: 'Not Hosted',
      description: 'My Final Year Project in college. Its not that good but it is added in this resume to show how much I have improved',
      technologiesUsed: 'HTML, CSS, JS, PHP, MySQL',
      projectDate: '01/06/2019'
    }
  };




  getMetricKeys(): (keyof MyPortfolios)[] {
    return Object.keys(this.MyPortfolioObject) as (keyof MyPortfolios)[];
  }
}

  


