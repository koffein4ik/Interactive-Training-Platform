import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserCourseStatusModel} from "../models/user-course-status.model";
import {Observable} from "rxjs";
import {CourseStatusModel} from "../models/course-status.model";

@Injectable({
  providedIn: 'root'
})
export class UserCourseStatusService {

  private readonly USER_COURSE_STATUS_API: string = "http://localhost:8080/api/courseStatus/";

  constructor(private http: HttpClient) { }

  public getUserCourseStatus(courseId: number): Observable<UserCourseStatusModel> {
    return this.http.get<UserCourseStatusModel>(this.USER_COURSE_STATUS_API + "getCourseStatusForUser/" + courseId);
  }

  public applyForCourse(courseId: number): Observable<UserCourseStatusModel> {
    return this.http.get<UserCourseStatusModel>(this.USER_COURSE_STATUS_API + "applyForCourse/" + courseId);
  }

  public getUserCourseStatuses(): Observable<UserCourseStatusModel[]> {
    return this.http.get<UserCourseStatusModel[]>(this.USER_COURSE_STATUS_API + "getUserCourseStatuses");
  }

  public getUserCourseStatusesByAuthor(): Observable<UserCourseStatusModel[]> {
    return this.http.get<UserCourseStatusModel[]>(this.USER_COURSE_STATUS_API + "getUserCourseStatusesByAuthor");
  }

  public updateUserCourseStatus(userCourseStatus: UserCourseStatusModel): Observable<UserCourseStatusModel> {
    return this.http.post<UserCourseStatusModel>(this.USER_COURSE_STATUS_API + "updateUserCourseStatus", userCourseStatus);
  }

  public getAllCourseStatuses(): Observable<CourseStatusModel[]> {
    return this.http.get<CourseStatusModel[]>(this.USER_COURSE_STATUS_API + "getAllCourseStatuses");
  }
}
