import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-pro-experience',
  templateUrl: './resume-pro-experience.component.html',
  styleUrls: ['./resume-pro-experience.component.css']
})
export class ResumeProExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiences: string[] = [
    'Developed business-benefitting solutions to enhance efficiency and speed.',
    'Created stored procedures and views for effective business solution development.',
    'Analyzed and resolved complex issues promptly to ensure smooth business operations.',
    'Managed client requirements from inception to delivery, including estimation, SOW writing, and on-time delivery.',
    'Designed and implemented programs to simplify complex tasks and streamline colleague workflows.',
    'Facilitated smooth onboarding for new team members, guiding them through project technology, structure, and workflow.'                     
  ];

}
