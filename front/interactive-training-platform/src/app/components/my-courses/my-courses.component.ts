import {Component, OnInit} from '@angular/core';
import {UserCourseStatusService} from "../../services/user-course-status.service";
import {UserCourseStatusModel} from "../../models/user-course-status.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.less']
})
export class MyCoursesComponent implements OnInit {

  public courseStatuses: UserCourseStatusModel[];

  constructor(private userCourseStatusService: UserCourseStatusService, private router: Router) {
  }

  public ngOnInit(): void {
    this.userCourseStatusService.getUserCourseStatuses()
      .subscribe((statuses: UserCourseStatusModel[]) => this.courseStatuses = statuses);
  }

  public onStartCourseClick(index: number): void {
    this.router.navigate(['course-content/' + this.courseStatuses[index].course.id]);
  }

}
