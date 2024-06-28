import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Metric } from '../about-metrics.interface';

@Component({
  selector: 'app-metric-template',
  templateUrl: './metric-template.component.html',
  styleUrls: ['./metric-template.component.css']
})
export class MetricTemplateComponent implements AfterViewInit {

  //Declare Data here
  @Input() metric?: Metric;
  @ViewChild('metricCount', { static: false }) metricCount!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.startCounterAnimation();
          }, 300);
          observer.disconnect(); // Stop observing once the div is visible
        }
      });
    });

    // Observe the target div
    observer.observe(this.metricCount.nativeElement);
  }

  startCounterAnimation(): void {
    let target = this.metric?.count || 0;
    let currentCount = parseFloat(this.metricCount.nativeElement.textContent);
    let difference = target - currentCount;
    let duration = 2500;
    let increment = difference / (duration / 50);

    let interval = setInterval(() => {
      currentCount += increment;

      if ((increment > 0 && currentCount > target) || (increment < 0 && currentCount < target)) {
        currentCount = target;
        clearInterval(interval);
      }

      let formattedCount = target % 1 === 0 ? currentCount.toFixed(0) : currentCount.toFixed(1);
      formattedCount = parseFloat(formattedCount).toString();

      this.metricCount.nativeElement.textContent = formattedCount;

      if (currentCount === target) {
        clearInterval(interval);
      }
    }, 50);
  }
}
