import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {CourseModel} from "../../models/course.model";
import {UserCourseStatusModel} from "../../models/user-course-status.model";
import {switchMap, tap} from "rxjs/operators";
import {UserCourseStatusService} from "../../services/user-course-status.service";
import {CourseReviewModel} from "../../models/course-review.model";
import {CourseReviewService} from "../../services/course-review.service";

@Component({
  selector: 'app-course-full-description',
  templateUrl: './course-full-description.component.html',
  styleUrls: ['./course-full-description.component.less']
})
export class CourseFullDescriptionComponent implements OnInit {

  public course: CourseModel;
  public userCourseStatus: UserCourseStatusModel;
  public reviews: CourseReviewModel[];
  public newReviewText: string;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private userCourseStatusService: UserCourseStatusService,
              private reviewService: CourseReviewService) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.courseService.getCourseById(params.id)
          .pipe(
            tap((course: CourseModel) => this.course = course),
            switchMap(() => this.userCourseStatusService.getUserCourseStatus(this.course.id)),
            tap((userCourseStatus: UserCourseStatusModel) => this.userCourseStatus = userCourseStatus)
          )
          .subscribe();
        this.reviewService.getCourseReviews(params.id)
          .subscribe((reviews: CourseReviewModel[]) => this.reviews = reviews);
      }
    });
  }

  public onCourseEnrollClick(): void {
    this.userCourseStatusService.applyForCourse(this.course.id)
      .subscribe((userCourseStatus: UserCourseStatusModel) => this.userCourseStatus = userCourseStatus);
  }

  public addReview(): void {
    const newReview: CourseReviewModel = {
      id: null,
      courseId: this.course.id,
      author: null,
      reviewContent: this.newReviewText
    }
    this.reviewService.addCourseReview(newReview)
      .pipe(
        switchMap(() => this.reviewService.getCourseReviews(this.course.id))
      )
      .subscribe((reviews: CourseReviewModel[]) => this.reviews = reviews);
  }

}
