import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseReviewModel} from "../models/course-review.model";

@Injectable({
  providedIn: 'root'
})
export class CourseReviewService {

  private readonly COURSE_REVIEW_API: string = "http://localhost:8080/api/review/";

  constructor(private http: HttpClient) { }

  public getCourseReviews(id: number): Observable<CourseReviewModel[]> {
    return this.http.get<CourseReviewModel[]>(this.COURSE_REVIEW_API + "getCourseReviews/" + id);
  }

  public addCourseReview(courseReviewModel: CourseReviewModel): Observable<CourseReviewModel[]> {
    return this.http.post<CourseReviewModel[]>(this.COURSE_REVIEW_API + "addCourseReview", courseReviewModel);
  }
}
