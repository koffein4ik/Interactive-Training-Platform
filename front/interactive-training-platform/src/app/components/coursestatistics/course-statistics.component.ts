import {Component, OnInit} from '@angular/core';
import {UserCourseStatusService} from "../../services/user-course-status.service";
import {ActivatedRoute} from "@angular/router";
import {CourseModel} from "../../models/course.model";
import {switchMap} from "rxjs/operators";
import {CourseStatusModel} from "../../models/course-status.model";
import {UserCourseStatusModel} from "../../models/user-course-status.model";
import {CourseStatusCountModel} from "../../models/course-status-count.model";

@Component({
  selector: 'app-coursestatistics',
  templateUrl: './course-statistics.component.html',
  styleUrls: ['./course-statistics.component.less']
})
export class CourseStatisticsComponent implements OnInit {

  public course: CourseModel;
  public statuses: {[key: string]: number} = {};
  public statusCount: CourseStatusCountModel[] = [];
  public displayedColumns: string[] = ['statusName', 'statusCount'];
  public isComponentVisible: boolean = false;

  constructor(private userCourseStatusService: UserCourseStatusService,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userCourseStatusService.getAllCourseStatuses()
        .pipe(
          switchMap((statuses: CourseStatusModel[]) => {
            statuses.forEach((status: CourseStatusModel) => {
              this.statuses[status.statusName] = 0;
            });
            console.log(this.statuses);
            return this.userCourseStatusService.getCourseStatusesByCourseId(params.id)
          })
        )
        .subscribe((userCourseStatuses: UserCourseStatusModel[]) => {
          userCourseStatuses.forEach((userCourseStatuses: UserCourseStatusModel) => {
            this.statuses[userCourseStatuses.status.statusName]++;
          });
          Object.keys(this.statuses).forEach((status: string) => {
            this.statusCount.push({statusName: status, count: this.statuses[status]});
          });
          console.log(this.statusCount);
          this.isComponentVisible = true;
        });
    });
  }

}
