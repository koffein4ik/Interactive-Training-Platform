import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {Observable} from "rxjs";
import {ResponseViewModel} from "../models/response-view.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USER_API: string = "http://localhost:8080/api/user/";

  constructor(private http: HttpClient) { }

  public regNewUser(user: UserModel): Observable<ResponseViewModel> {
    return this.http.post<ResponseViewModel>(this.USER_API + "regNewUser", user);
  }
}
