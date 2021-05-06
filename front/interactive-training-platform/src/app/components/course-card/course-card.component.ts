import {Component, Input, OnInit} from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent implements OnInit {

  @Input()
  public course: CourseModel;

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public openCourse(): void {
    this.router.navigate(['/course/' + this.course.id]);
  }

}
