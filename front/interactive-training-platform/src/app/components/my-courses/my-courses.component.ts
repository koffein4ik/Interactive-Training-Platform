import {Component, OnInit} from '@angular/core';
import {UserCourseStatusService} from "../../services/user-course-status.service";
import {UserCourseStatusModel} from "../../models/user-course-status.model";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.less']
})
export class MyCoursesComponent implements OnInit {

  public courseStatuses: UserCourseStatusModel[];

  constructor(private userCourseStatusService: UserCourseStatusService) {
  }

  public ngOnInit(): void {
    this.userCourseStatusService.getUserCourseStatuses()
      .subscribe((statuses: UserCourseStatusModel[]) => this.courseStatuses = statuses);
  }

  public onStartCourseClick(): void {

  }

}
