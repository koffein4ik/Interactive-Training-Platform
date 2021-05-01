import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USER_API: string = "http://localhost:8080/api/user/";

  constructor(private http: HttpClient) { }
}
