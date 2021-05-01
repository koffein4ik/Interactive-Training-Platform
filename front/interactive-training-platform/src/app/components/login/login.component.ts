import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {LoginDataModel} from "../../models/login-data.model";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private authenticationService: AuthenticationService) { }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    });
  }

  public onLoginButtonClick(): void {
    const loginData: LoginDataModel = {
      login: this.formGroup.controls["login"].value,
      password: this.formGroup.controls["password"].value
    }
    this.authenticationService.authorize(loginData)
      .pipe(catchError(error => {
        console.log(error);
        return throwError(error);
      }))
      .subscribe(token => {
        localStorage.setItem("token", token.token);
      });
  }

}
