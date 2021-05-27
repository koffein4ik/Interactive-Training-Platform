import {Component, OnInit} from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.less']
})
export class AllCoursesComponent implements OnInit {

  public courses: CourseModel[];

  constructor(private courseService: CourseService) {
  }

  public ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((courses: CourseModel[]) => {
      this.courses = courses;
      console.log(this.courses);
      // for (let i = 0; i < 2; i++) {
      //   this.courses.push(this.courses[0]);
      //   // this.courses[i].imagePath = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Japan_small_icon.png";
      // }
      // this.courses[0] = this.courses[4];
      // this.courses[1].imagePath = "https://www.scottsfortcollinsauto.com/wp-content/uploads/TrafficLaws1.jpg";
      // this.courses[1].name = "Traffic laws in UK";
      // this.courses[1].shortDescription = "Learn basics of traffic laws in UK";
      // this.courses[2].imagePath = "https://www.freecodecamp.org/news/content/images/2020/04/introprogramming.png";
      // this.courses[2].name = "Introduction to programming";
      // this.courses[2].shortDescription = "Learn the basics of computer programming and computer science with this course";
      // this.courses[3].imagePath = "https://digitaldefynd.com/wp-content/uploads/2018/07/best-photography-course-tutorial-class-certification-training-online.jpg";
      // this.courses[3].name = "Fundamentals of Photography";
      // this.courses[3].shortDescription = "This course will help you to create a strong foundation in photography";
    });
  }

}
