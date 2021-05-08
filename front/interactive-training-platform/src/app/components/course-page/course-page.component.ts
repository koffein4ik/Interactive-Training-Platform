import {Component, OnInit} from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {map} from "rxjs/operators";
import {TestService} from "../../services/test.service";
import {CourseTestModel} from "../../models/course-test.model";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.less']
})
export class CoursePageComponent implements OnInit {

  public course: CourseModel;
  public courseTest: CourseTestModel;
  public isTestStep: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private testService: TestService) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
        if (params.id) {
          this.courseService.getCourseById(params.id)
            .pipe(
              map((course: CourseModel) => {
                course.courseContent = JSON.parse(<string><unknown>course.courseContent);
                return course;
              })
            )
            .subscribe((course: CourseModel) => this.course = course);
          this.testService.getCourseTest(params.id)
            .pipe(
              map((courseTest: CourseTestModel) => {
                courseTest.testContent = JSON.parse(<string><unknown>courseTest.testContent);
                return courseTest;
              })
            )
            .subscribe((courseTest: CourseTestModel) => this.courseTest = courseTest);
        }
      }
    );
  }

  public goToTest(): void {
    this.isTestStep = true;
  }

}
