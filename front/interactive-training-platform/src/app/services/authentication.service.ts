import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginDataModel} from "../models/login-data.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly AUTHENTICATION_API: string = "http://localhost:8080/api/authentication/"

  public isUserAuthorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  public authorize(loginData: LoginDataModel): Observable<AuthToken> {
    return this.http.post<AuthToken>(this.AUTHENTICATION_API + "generate-token", loginData);
  }

  public test(): Observable<string> {
    const options: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
    return this.http.get<string>(this.AUTHENTICATION_API + "test", options);
  }

  public logout(): void {
    localStorage.removeItem("token");
    this.isUserAuthorized.next(false);
  }
}

export interface AuthToken {
  readonly token: string;
}
