import { Component, ElementRef, OnInit, Output, QueryList, ViewChild, ViewChildren, EventEmitter, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-connect-with-me',
  templateUrl: './connect-with-me.component.html',
  styleUrls: ['./connect-with-me.component.css']
})
export class ConnectWithMeComponent implements OnInit, AfterViewChecked {

  @ViewChildren('inputField') inputFields: QueryList<ElementRef> | undefined;
  @ViewChild('ConnectMeButton') ConnectMeButton: ElementRef | undefined;

  @Output()
  DataInForm: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  anyFieldTouchedStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  loading: boolean = false;

  constructor(private backendServer: BackendServiceService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    //Sent Formdata to Parent Compoent
    this.DataInForm.emit(this.sendMessage.value)//Sending data to parent compoent
    this.touchedOrNot();
  }


  // Form Group and Form Control Validators
  sendMessage = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });


  // canExit(): boolean {
  //   if (this.sendMessage.value.fullname === '' ||
  //       this.sendMessage.value.email === '' ||
  //       this.sendMessage.value.subject === '' ||
  //       this.sendMessage.value.message === '') {
  //     return confirm("You have unsaved changes. Do you want to navigate away?");
  //   } else {
  //     return true;
  //   }
  // }

  sendMessageEmail() {


    //Handle Button Click Effect Here
    if (this.ConnectMeButton) {
      this.ConnectMeButton.nativeElement.classList.add('connectme-button-click-animation')
      setTimeout(() => {
        if (this.ConnectMeButton) {
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
          this.sendMessage.reset();

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

  fieldisTouched=false

  touchedOrNot(){
    if (this.inputFields) {
      this.inputFields.forEach((field: ElementRef) => {
        field.nativeElement.addEventListener('blur', () => {
          this.fieldisTouched = true;
          this.anyFieldTouchedStatus.emit(this.fieldisTouched); // Emit the status if necessary
        });
      });
    }
  }
}
