import { Component, OnInit } from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.less']
})
export class AllCoursesComponent implements OnInit {

  public courses: CourseModel[];

  constructor(private courseService: CourseService) { }

  public ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((courses: CourseModel[]) => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

}
