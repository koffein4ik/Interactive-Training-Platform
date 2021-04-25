import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseModel} from "../../models/course.model";

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.less']
})
export class AddNewCourseComponent implements OnInit {

  public currentStep: number = 2;
  public courseDescriptionFormGroup: FormGroup;
  public createdCourse: CourseModel;
  private readonly onlyNumbersRegexp: string = '^[0-9]+$';

  constructor() { }

  public ngOnInit(): void {
    this.courseDescriptionFormGroup = new FormGroup({
      courseName: new FormControl(),
      courseShortDescription: new FormControl(),
      courseFullDescription: new FormControl(),
      coursePrice: new FormControl(null, Validators.pattern(this.onlyNumbersRegexp))
    });
  }

  public onClickSaveFirstStep(): void {
    this.createdCourse = {
      id: null,
      name: this.courseDescriptionFormGroup.controls["courseName"].value,
      shortDescription: this.courseDescriptionFormGroup.controls["courseShortDescription"].value,
      fullDescription: this.courseDescriptionFormGroup.controls["courseFullDescription"].value,
      imagePath: null,
      price: this.courseDescriptionFormGroup.controls["coursePrice"].value,
      courseContent: []
    }
    this.currentStep = 2;
  }

  public onClickSaveSecondStep(): void {

  }

}
