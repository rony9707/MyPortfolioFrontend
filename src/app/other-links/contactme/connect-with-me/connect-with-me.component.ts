import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-connect-with-me',
  templateUrl: './connect-with-me.component.html',
  styleUrls: ['./connect-with-me.component.css']
})
export class ConnectWithMeComponent implements OnInit {

  @ViewChildren('inputField') inputFields: QueryList<ElementRef> | undefined;
  @ViewChild('ConnectMeButton') ConnectMeButton: ElementRef | undefined;

  loading: boolean = false;

  constructor(private backendServer: BackendServiceService) { }

  ngOnInit(): void {
  }

  // Form Group and Form Control Validators
  sendMessage = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('chowdhury.agnibha.98@gmail.com', [Validators.required, Validators.email]),
    subject: new FormControl('asrfwear', [Validators.required]),
    message: new FormControl('werwaerwaerwaerwaerwerwer', [Validators.required])
  });

  sendMessageEmail() {

    //Handle Button Click Effect Here
    if (this.ConnectMeButton) {
      this.ConnectMeButton.nativeElement.classList.add('connectme-button-click-animation')
      setTimeout(() => {
        if(this.ConnectMeButton){
          this.ConnectMeButton.nativeElement.classList.remove('connectme-button-click-animation')
        }
      }, 200)
    }


    // Code if form is invalid
    if (!this.sendMessage.valid) {
      // Highlight invalid fields and add shake animation
      this.highlightInvalidFields();

    } else {
      // Perform the form submission here
      this.loading = true;
      //Sent Email to the user
      this.backendServer.sentEmailConnectWithMe(this.sendMessage.value).subscribe(
        (res) => {


          swal.fire({
            title: "Email Sent successfully",
            text: res.message,
            icon: "success",
            timer: 1500, // Auto close after 2 seconds
            timerProgressBar: true, // Show progress bar
            showConfirmButton: false // Hide the "OK" button
          });

          this.loading = false;

        },
        (err) => {
          this.loading = false;
          swal.fire("Error", err.error.message)
        }
      )
    }
  }

  highlightInvalidFields() {

    // If inputFields is defined, highlight the invalid fields
    if (this.inputFields) {
      this.inputFields.forEach((field: ElementRef) => {
        const controlName = field.nativeElement.getAttribute('formControlName');
        if (this.sendMessage.controls[controlName] && this.sendMessage.controls[controlName].invalid) {
          field.nativeElement.classList.add('shake');
          // Remove the shake class after animation completes
          setTimeout(() => {
            field.nativeElement.classList.remove('shake');
          }, 500);
        } else {
        }
      });
    }
  }

  // Code for input field validator text
  get fullnameValidator() {
    return this.sendMessage.get('fullname');
  }

  get emailValidator() {
    return this.sendMessage.get('email');
  }

  get subjectValidator() {
    return this.sendMessage.get('subject');
  }

  get messageValidator() {
    return this.sendMessage.get('message');
  }

  // Function which will help to type only alphabets
  onlyAlphabets(event: KeyboardEvent) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 32)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
