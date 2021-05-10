import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {LoginDataModel} from "../../models/login-data.model";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public incorrectCreds: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

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
        this.incorrectCreds = true;
        return throwError(error);
      }))
      .subscribe(token => {
        this.incorrectCreds = false;
        this.authenticationService.isUserAuthorized.next(true);
        alert("You've successfully logged in!");
        localStorage.setItem("token", token.token);
        this.router.navigate(['/']);
      });
  }

}
