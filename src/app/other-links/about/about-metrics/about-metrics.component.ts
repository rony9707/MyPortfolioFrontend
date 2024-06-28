import { Component, OnInit } from '@angular/core';
import { AboutMeMetrics } from './about-metrics.interface';

@Component({
  selector: 'app-about-metrics',
  templateUrl: './about-metrics.component.html',
  styleUrls: ['./about-metrics.component.css']
})
export class AboutMetricsComponent implements OnInit {

  //Declare Data here
  metrics: AboutMeMetrics = {
    itExperience: {
      count: 0,
      description: "Year's of IT Experience",
      svgImage: 'assets/svg/it.svg',
    },
    hoursOfSupport: {
      count: 0,
      description: 'Hours of Support',
      svgImage: 'assets/svg/time.svg',
    },
    numberOfTechUsed: {
      count: 8,
      description: 'Number of Technologies Used',
      svgImage: 'assets/svg/technology.svg',
    },
    certificatesEarned: {
      count: 5,
      description: 'Certificates Earned',
      svgImage: 'assets/svg/certificate.svg',
    },
  };

  constructor() { 
  }

  ngOnInit(): void {
    this.calculateMetrices();
  }


 calculateMetrices() {
    let doj = '23/06/2020';

    // Calculate IT experience------------------------------------------------------------------------
    let [day, month, year] = doj.split('/').map(Number);  // Split doj to day, month and year which all have type number
    let dateOfJoining = new Date(year, month - 1, day);

    let currentDate = new Date();
    let timeDifference = currentDate.getTime() - dateOfJoining.getTime();
    let yearsOfExperience = timeDifference / (1000 * 60 * 60 * 24 * 365.25);
    yearsOfExperience = Math.round(yearsOfExperience * 10) / 10;

    this.metrics.itExperience.count = yearsOfExperience;

    // Calculate Hours of support------------------------------------------------------------------------
    this.metrics.hoursOfSupport.count = this.calculateSupportHours(dateOfJoining);
}

calculateSupportHours(startDate: Date): number {
    const endDate = new Date(); // Current date
    const hoursPerDay = 9;
    const personalLeaveDaysPerYear = 30;

    // Calculate the total number of days between the start date and end date
    const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    // Calculate the number of weekends between the start date and end date
    let weekends = 0;
    for (let i = 0; i <= totalDays; i++) {
        const currentDay = new Date(startDate);
        currentDay.setDate(startDate.getDate() + i);
        const dayOfWeek = currentDay.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday (0) or Saturday (6)
            weekends++;
        }
    }

    // Calculate the number of years worked
    const yearsWorked = endDate.getFullYear() - startDate.getFullYear();

    // Calculate the total number of personal leave days
    const totalPersonalLeaveDays = yearsWorked * personalLeaveDaysPerYear;

    // Calculate the total working days
    const workingDays = totalDays - weekends - totalPersonalLeaveDays;

    // Calculate the total support hours
    const totalSupportHours = workingDays * hoursPerDay;

    return totalSupportHours;
}



  //convert this.metrics to array which has all the important metrices
  getMetricKeys(): (keyof AboutMeMetrics)[] {
    return Object.keys(this.metrics) as (keyof AboutMeMetrics)[];
  }


  isSmallerScreen(): boolean {
    return window.innerWidth <= 506;
  }

  isSmallScreen(): boolean {
    return window.innerWidth <= 1172;
  }


}
