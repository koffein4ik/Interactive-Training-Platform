import {Component, OnInit} from "@angular/core";
import {UserCourseStatusService} from "../../services/user-course-status.service";
import {UserCourseStatusModel} from "../../models/user-course-status.model";
import {CourseStatusModel} from "../../models/course-status.model";
import {filter, map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-created-courses',
  templateUrl: './my-created-courses.component.html',
  styleUrls: ['./my-created-courses.component.less']
})
export class MyCreatedCoursesComponent implements OnInit {

  public userCourseStatuses: UserCourseStatusModel[];
  public courseStatuses: CourseStatusModel[];
  public displayedColumns: string[] = ['courseName', 'userLogin', 'userFirstName', 'userLastName', 'userEmail', 'currentCourseStatus', 'updatedStatus', 'viewCourseStats'];

  constructor(private userCourseStatusService: UserCourseStatusService, private router: Router) {
  }

  public ngOnInit(): void {
    this.userCourseStatusService.getUserCourseStatusesByAuthor()
      .subscribe((statuses: UserCourseStatusModel[]) => this.userCourseStatuses = statuses);
    this.userCourseStatusService.getAllCourseStatuses()
      .pipe(
        map((statuses: CourseStatusModel[]) => {
          return statuses.filter((status: CourseStatusModel) => status.statusName === 'Rejected' || status.statusName === 'Available');
        })
      )
      .subscribe((statuses: CourseStatusModel[]) => this.courseStatuses = statuses);
  }

  public onUserCourseStatusChange(statusId: number, selectedStatus: string): void {
    const userCourseStatus = this.userCourseStatuses.find((status: UserCourseStatusModel) => status.id === statusId);
    userCourseStatus.status = this.courseStatuses.find((status: CourseStatusModel) => status.statusName === selectedStatus);
    this.userCourseStatusService.updateUserCourseStatus(userCourseStatus).subscribe();
  }

  public onViewStatsClick(courseId: number): void {
    this.router.navigate(['/course-statistics/' + courseId]);
  }

}
