import {Component, OnInit} from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {map} from "rxjs/operators";
import {TestService} from "../../services/test.service";
import {CourseTestModel} from "../../models/course-test.model";
import {UserTestQuestionAnswersModel} from "../../models/user-test-question-answers.model";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.less']
})
export class CoursePageComponent implements OnInit {

  public course: CourseModel;
  public courseTest: CourseTestModel;
  public currentStepNumber: number = 1;
  public testCheckResult: string = 'Failed';
  public isCourseUnavailable;
  public nextCourse: CourseModel;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private testService: TestService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
        if (params.id) {
          this.courseService.getCourseContentById(params.id)
            .pipe(
              map((course: CourseModel) => {
                course.courseContent = JSON.parse(<string><unknown>course.courseContent);
                return course;
              })
            )
            .subscribe((course: CourseModel) => this.course = course, (error => {
              alert("This course is unavailable for you");
              this.isCourseUnavailable = true;
            }));
          this.testService.getCourseTest(params.id)
            .pipe(
              map((courseTest: CourseTestModel) => {
                courseTest.testContent = JSON.parse(<string><unknown>courseTest.testContent);
                return courseTest;
              })
            )
            .subscribe((courseTest: CourseTestModel) => this.courseTest = courseTest);
          this.courseService.getNextCourseByCurrentCourseId(params.id)
            .subscribe((course: CourseModel) => this.nextCourse = course);
        }
      }
    );
  }

  public goToTest(): void {
    this.currentStepNumber = 2;
  }

  public onFinishTest(userTestQuestionAnswersModel: UserTestQuestionAnswersModel): void {
    this.testService.checkAnswers(userTestQuestionAnswersModel)
      .subscribe((result: string) => {
        this.testCheckResult = result;
        this.currentStepNumber = 3;
      });
  }

  public onOtherCoursesClick(): void {
    this.router.navigate(['/']);
  }

  public onTryAgainClick(): void {
    window.location.reload();
  }

  public onNextCourseClick():void {
    window.location.pathname = "/course-content/" + this.nextCourse.id;
  }

}
