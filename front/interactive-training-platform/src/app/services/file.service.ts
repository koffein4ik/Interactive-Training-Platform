import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly FILE_API: string = "http://localhost:8080/api/file/";

  constructor(private http: HttpClient) { }

  public uploadFile(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append("fileKey", file);
    const options: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
    return this.http.post<string>(this.FILE_API + "uploadCourseContentFile", formData, options);
  }
}
