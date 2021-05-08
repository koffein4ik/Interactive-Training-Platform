import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseTestModel} from "../models/course-test.model";
import {TestQuestionAnswerModel} from "../models/test-question-answer.model";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private readonly TEST_API: string = "http://localhost:8080/api/test/"

  constructor(private http: HttpClient) { }

  public saveTest(test: CourseTestModel): Observable<string> {
    const options: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
    const testCopy: any = JSON.parse(JSON.stringify(test));
    testCopy.testContent = JSON.stringify(test.testContent);
    return this.http.post<string>(this.TEST_API + "saveTest", testCopy, options);
  }

  public saveTestQuestionAnswers(testAnswers: TestQuestionAnswerModel[]): Observable<void> {
    return this.http.post<void>(this.TEST_API + "saveTestQuestionAnswers", testAnswers);
  }

  public getCourseTest(courseId: number): Observable<CourseTestModel> {
    return this.http.get<CourseTestModel>(this.TEST_API + "getCourseTest/" + courseId);
  }

}
