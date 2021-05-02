import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/user.model";
import {ResponseViewModel} from "../../models/response-view.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private userService: UserService) {
  }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      birthDate: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  public onSubmitButtonClick(): void {
    const user: UserModel = {
      login: this.formGroup.controls["login"].value,
      firstName: this.formGroup.controls["firstName"].value,
      lastName: this.formGroup.controls["lastName"].value,
      birthDate: this.formGroup.controls["birthDate"].value,
      email: this.formGroup.controls["email"].value,
      password: this.formGroup.controls["password"].value
    }
    this.userService.regNewUser(user).subscribe((response: ResponseViewModel) => {
      if (response.errorOccurred) {
        alert(response.errorMessage);
      } else {
        alert("You were registered successfully. Now you can log in.");
      }
    })
  }

}
