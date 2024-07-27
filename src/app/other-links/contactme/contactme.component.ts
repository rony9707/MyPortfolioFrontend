import { Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  canDeactivateValue = false
  fieldIsTouched=false
  handleFormData(sendMessage: any) {
    if (sendMessage.fullname === '' ||
      sendMessage.email === '' ||
      sendMessage.subject === '' ||
      sendMessage.message === '') {
      this.canDeactivateValue = false;
    } else {
      this.canDeactivateValue = true;
    }
  }

  handleFieldTouched(value:boolean){
    this.fieldIsTouched=true
  }

  async canExit(): Promise<boolean> {
    if (this.canDeactivateValue == false && this.fieldIsTouched==true) {
      return await this.showSweetAlert();
    } else {
      return true;
    }
  }

  async showSweetAlert(): Promise<boolean> {
    const { value } = await Swal.fire({
      title: 'You have unsaved changes. Do you want to navigate away?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });

    return value === true;
  }


}
