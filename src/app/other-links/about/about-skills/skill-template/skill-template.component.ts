import { Component, Input, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { skillData } from '../about-skill.interface';

@Component({
  selector: 'app-skill-template',
  templateUrl: './skill-template.component.html',
  styleUrls: ['./skill-template.component.css'],
  animations: [
    trigger('progressAnimation', [
      state('start', style({
        width: '0%'
      })),
      state('end', style({
        width: '{{ widthValue }}%'
      }), { params: { widthValue: 0 } }),
      transition('start => end', animate('1s'))
    ])
  ]
})
export class SkillTemplateComponent implements AfterViewInit {

  @ViewChild('templatePercentage', { static: false }) templatePercentage!: ElementRef;


  percentage: number = 0;
  animationState: string = 'start';
  widthValue: number = 0;

  @ViewChild('skillTemplate', { static: false }) skillTemplate!: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) { }

  @Input() skill?: skillData;

  ngAfterViewInit(): void {
    this.percentage = parseFloat(this.templatePercentage.nativeElement.textContent.replace('%', ''));
    // Set dynamic width value
    this.setWidthValue();

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          // Trigger animation
          setTimeout(() => {
            this.animationState = 'end';
          }, 100);

          observer.disconnect(); // Stop observing once the div is visible
        }
      });
    });

    // Observe the target div
    observer.observe(this.skillTemplate.nativeElement);
  }


  // set the width of the progress bar to the percentage
  private setWidthValue(): void {
    this.widthValue = this.percentage;
    this.cdRef.detectChanges(); // Manually trigger change detection
  }
}
