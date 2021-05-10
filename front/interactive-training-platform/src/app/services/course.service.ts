import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseModel} from "../models/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly COURSE_API: string = "http://localhost:8080/api/course/";

  constructor(private http: HttpClient) {
  }

  public test(): Observable<string> {
    const options: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
    return this.http.get<string>(this.COURSE_API + "test", options);
  }

  public saveCourse(course: CourseModel): Observable<string> {
    const options: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
    const courseCopy: any = JSON.parse(JSON.stringify(course));
    courseCopy.courseContent = JSON.stringify(course.courseContent);
    return this.http.post<string>(this.COURSE_API + "saveCourse", courseCopy, options);
  }

  public getAllCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.COURSE_API + "getAllCourses");
  }

  public getCourseById(id: number): Observable<CourseModel> {
    return this.http.get<CourseModel>(this.COURSE_API + "getCourseById/" + id);
  }
}
