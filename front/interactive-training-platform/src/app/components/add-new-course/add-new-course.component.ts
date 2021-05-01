import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseModel} from "../../models/course.model";
import {MatDialog} from "@angular/material/dialog";
import {AddNewLessonPopupComponent} from "../add-new-lesson-popup/add-new-lesson-popup.component";
import {SlideContentModel} from "../../models/slide-content.model";
import {SlideContentConstantsModel} from "../../models/slide-content-constants.model";
import {LessonModel} from "../../models/lessonModel";
import {AddCourseContentPopupComponent} from "../add-course-content-popup/add-course-content-popup.component";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.less']
})
export class AddNewCourseComponent implements OnInit {

  public currentStep: number = 2;
  public currentLessonNumber: number = 0;
  public courseDescriptionFormGroup: FormGroup;
  private readonly onlyNumbersRegexp: string = '^[0-9]+$';

  public textContent: SlideContentModel = {
    slideContentType: SlideContentConstantsModel.TEXT_SLIDE_TYPE,
    slideContent: "Although effectively speaking and writing in English requires practice, it isn’t an impossible task. With a top-rated English course from Interactive training platform, you’ll learn English grammar and conversation skills to help you succeed in the English-speaking world."
  }

  public videoContent: SlideContentModel = {
    slideContentType: SlideContentConstantsModel.VIDEO_SLIDE_TYPE,
    slideContent: "https://www.youtube.com/embed/juKd26qkNAw"
  }

  public audioContent: SlideContentModel = {
    slideContentType: SlideContentConstantsModel.AUDIO_SLIDE_TYPE,
    slideContent: "http://www.book2.nl/book2/EN/SOUND/0703.mp3"
  }

  public imageContent: SlideContentModel = {
    slideContentType: SlideContentConstantsModel.IMAGE_SLIDE_TYPE,
    slideContent: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/79977495_1181074778758847_2287378081519763456_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=sbvif8lrBVAAX-45gRu&_nc_ht=scontent-waw1-1.xx&oh=f5c02e9ab9151184b6f7363bcfdca331&oe=60A6A302"
  }

  public courseContent: LessonModel = { name: "FIRST ONE", slideContent: [this.textContent, this.videoContent, this.audioContent, this.imageContent] };
  public courseContent2: LessonModel = { name: "VTOROI", slideContent: [this.textContent, this.textContent, this.imageContent, this.imageContent] };

  public createdCourse: CourseModel = {
    id: 1,
    name: "First one",
    shortDescription: "Short descr",
    fullDescription: "Full descr",
    price: 123,
    imagePath: "abcd",
    courseContent: [this.courseContent, this.courseContent2]
  }

  constructor(private matDialog: MatDialog, private courseService: CourseService) {
  }

  public ngOnInit(): void {
    this.courseService.test().subscribe((value) => console.log(value));
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

  public openLessonDialog() {
    const dialogRef = this.matDialog.open(AddNewLessonPopupComponent);
    dialogRef.afterClosed().subscribe((lessonName: string) => {
      this.addNewLesson(lessonName);
    });
  }

  public addNewLesson(lessonName: string): void {
    if (lessonName) {
      this.createdCourse.courseContent.push({name: lessonName, slideContent: []});
      this.currentLessonNumber = this.createdCourse.courseContent.length - 1;
    }
  }

  public openCourseContentDialog() {
    const dialogRef = this.matDialog.open(AddCourseContentPopupComponent);
    dialogRef.afterClosed().subscribe((courseContent: SlideContentModel) => {
      if (courseContent) {
        this.createdCourse.courseContent[this.currentLessonNumber].slideContent.push(courseContent);
      }
    });
  }

}
