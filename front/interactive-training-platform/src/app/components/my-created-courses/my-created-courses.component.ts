import {Component, OnInit} from "@angular/core";
import {UserCourseStatusService} from "../../services/user-course-status.service";
import {UserCourseStatusModel} from "../../models/user-course-status.model";
import {CourseStatusModel} from "../../models/course-status.model";

@Component({
  selector: 'app-my-created-courses',
  templateUrl: './my-created-courses.component.html',
  styleUrls: ['./my-created-courses.component.less']
})
export class MyCreatedCoursesComponent implements OnInit {

  public userCourseStatuses: UserCourseStatusModel[];
  public courseStatuses: CourseStatusModel[];

  constructor(private userCourseStatusService: UserCourseStatusService) {
  }

  public ngOnInit(): void {
    this.userCourseStatusService.getUserCourseStatusesByAuthor()
      .subscribe((statuses: UserCourseStatusModel[]) => this.userCourseStatuses = statuses);
    this.userCourseStatusService.getAllCourseStatuses()
      .subscribe((statuses: CourseStatusModel[]) => this.courseStatuses = statuses);
  }

  public onUserCourseStatusChange(index: number, selectedStatus: string): void {
    this.userCourseStatuses[index].status = this.courseStatuses.find((status: CourseStatusModel) => status.statusName === selectedStatus);
    this.userCourseStatusService.updateUserCourseStatus(this.userCourseStatuses[index]).subscribe();
  }

}
