import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  public formGroup: FormGroup;

  constructor() {
  }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      birthDate: new FormControl(),
      email: new FormControl(),
    });
  }

  public onSubmitButtonClick(): void {

  }

}
