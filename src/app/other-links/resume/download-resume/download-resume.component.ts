// download-resume.component.ts
import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-download-resume',
  templateUrl: './download-resume.component.html',
  styleUrls: ['./download-resume.component.css']
})
export class DownloadResumeComponent implements OnInit {
  loading: boolean = false;
  email: string = '';

  constructor(private backendServer: BackendServiceService) { }

  ngOnInit(): void {
  }

  download(): void {
    this.loading = true;

    // Simulate async operation
    setTimeout(() => {
      // Create an anchor element and set the href to the path of the file
      const link = document.createElement('a');
      link.href = 'assets/resume/resume.7z';
      link.download = 'resume.7z';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show alert message
      swal.fire({
        title: "Success",
        text: "Your resume has been downloaded successfully!",
        icon: "success",
        timer: 1500, // Auto close after 1.5 seconds
        timerProgressBar: true, // Show progress bar
        showConfirmButton: false, // Hide the "OK" button
        background: '#e9f7ef', // Light green background to match success theme
        iconColor: '#28a745', // Custom icon color for success
        willClose: () => {
          // Show email input prompt after success message closes
          swal.fire({
            title: "Input email address",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address",
            showCancelButton: true,
            confirmButtonText: 'Submit',
            preConfirm: (email) => {
              if (email) {
                this.email = email;

                let dataSentToBackend = {
                  email: this.email
                }
                //Sent Email to the user
                this.backendServer.sentResumePassword(dataSentToBackend).subscribe(
                  (res)=>{

                    swal.fire({
                      title: "Email Sent successfully",
                      text: res.message,
                      icon: "success",
                      timer: 1500, // Auto close after 2 seconds
                      timerProgressBar: true, // Show progress bar
                      showConfirmButton: false // Hide the "OK" button
                    });

                    
                  },
                  (err) => {
                    swal.fire("Error", err.error.message)
                  }
                )


                // console.log("Email entered:", this.email);
              } else {
                swal.showValidationMessage('Please enter a valid email address');
              }
            }
          });
        }
      });

      this.loading = false;
    }, 2000);
  }
}
