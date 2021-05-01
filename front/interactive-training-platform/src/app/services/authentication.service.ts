import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginDataModel} from "../models/login-data.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly AUTHENTICATION_API: string = "http://localhost:8080/api/authentication/"

  constructor(private http: HttpClient) {
  }

  public authorize(loginData: LoginDataModel): Observable<AuthToken> {
    return this.http.post<AuthToken>(this.AUTHENTICATION_API + "generate-token", loginData);
  }
}

export interface AuthToken {
  readonly token: string;
}
