import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly COURSE_API: string = "http://localhost:8080/api/course/";

  constructor(private http: HttpClient) {
  }

  public test(): Observable<string> {
    return this.http.get<string>(this.COURSE_API + "test");
  }
}
