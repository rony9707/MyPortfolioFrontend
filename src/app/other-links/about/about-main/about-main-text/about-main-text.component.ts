import { Component, OnInit } from '@angular/core';
import { AboutMeInfo } from './about-me-info.interface';
import swal from 'sweetalert2';


@Component({
  selector: 'app-about-main-text',
  templateUrl: './about-main-text.component.html',
  styleUrls: ['./about-main-text.component.css']
})
export class AboutMainTextComponent implements OnInit {

  aboutMeShort = `This is Agnibha, a Developer from Kolkata. 
    Currently, I'm working with Capgemini in Mumbai. 
    I'm passionate about creating efficient and innovative software solutions and front end design.`;

  aboutMeInfo: AboutMeInfo = {
    Birthday: new Date('1997-02-07'),
    Website: window.location.origin,
    Phone: '+917003652082',
    Location: 'Kolkata/Mumbai, India',
    Age: 0,
    Degree: 'B.Tech in C.S.E',
    Email: 'chowdhury.agnibha.98@gmail.com',
    Language: 'Bengali, English & Hindi',
  };

  constructor() { }

  ngOnInit(): void {
    this.calculateAge();
  }

  date = new Date();
  calculateAge(): void {
    const today = new Date();
    const birthDate = new Date(this.aboutMeInfo.Birthday);
    let age = today.getFullYear() - birthDate.getFullYear();

    const currentMonth = today.getMonth() + 1; // getMonth() returns 0-indexed month
    const birthMonth = birthDate.getMonth() + 1;
    const currentDay = today.getDate();
    const birthDay = birthDate.getDate();

    // Check if the current month/day is before the birth month/day
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
    this.aboutMeInfo.Age = age;
  }

  // To copy to clipboard using the modern Clipboard API
  copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');

    swal.fire({
      text: 'Copied to Clipboard!',
      icon: 'success',
      timer: 1500, // Auto close after 1.5 seconds
      timerProgressBar: true, // Show progress bar
      showConfirmButton: false, // Hide the "OK" button
      toast: true, // Make it a toast notification
      position: 'top-end', // Position it at the top end
      background: '#f0f0f0', // Custom background color
      iconColor: '#2ee08c', // Custom icon color for success/error
      customClass: {
        popup: 'swal2-custom-popup' // Add custom CSS class
      },
      didOpen: () => {
        const progressBar = swal.getTimerProgressBar();
        if (progressBar) {
          progressBar.style.background = '#2ee08c'; // Custom progress bar color
        }
      }
    });

    document.body.removeChild(textarea);
  }


  showNotification(message: string, icon: 'success' | 'error'): void {
    swal.fire({
      text: message,
      icon: icon,
      timer: 1500, // Auto close after 1.5 seconds
      timerProgressBar: true, // Show progress bar
      showConfirmButton: false, // Hide the "OK" button
      toast: true, // Make it a toast notification
      position: 'top-end', // Position it at the top end
      background: '#f0f0f0', // Custom background color
      iconColor: icon === 'success' ? '#2ee08c' : '#e02e2e', // Custom icon color for success/error
      customClass: {
        popup: 'swal2-custom-popup' // Add custom CSS class
      },
      didOpen: () => {
        const progressBar = swal.getTimerProgressBar();
        if (progressBar) {
          progressBar.style.background = icon === 'success' ? '#2ee08c' : '#e02e2e'; // Custom progress bar color
        }
      }
    });
  }
}
