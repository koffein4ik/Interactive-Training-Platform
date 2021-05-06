import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseModel} from "../../models/course.model";
import {MatDialog} from "@angular/material/dialog";
import {AddNewLessonPopupComponent} from "../add-new-lesson-popup/add-new-lesson-popup.component";
import {SlideContentModel} from "../../models/slide-content.model";
import {SlideContentConstantsModel} from "../../models/slide-content-constants.model";
import {LessonModel} from "../../models/lesson.model";
import {AddCourseContentPopupComponent} from "../add-course-content-popup/add-course-content-popup.component";
import {CourseService} from "../../services/course.service";
import {FileService} from "../../services/file.service";
import {CourseTestModel} from "../../models/course-test.model";
import {TestLessonModel} from "../../models/test-lesson.model";
import {TestQuestionTypesConstantsModel} from "../../models/test-question-types.constants.model";
import {Observable, of} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {AddCourseTestQuestionPopupComponent} from "../add-course-test-question-popup/add-course-test-question-popup.component";
import {QuestionFormContentModel} from "../../models/question-form-content.model";
import {TestService} from "../../services/test.service";
import {TestQuestionAnswerModel} from "../../models/test-question-answer.model";
import {RadioButtonQuestionModel} from "../../models/radio-button-question.model";
import {TestTextQuestionModel} from "../../models/test-text-question.model";

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.less']
})
export class AddNewCourseComponent implements OnInit {

  public currentStep: number = 2;
  public currentLessonNumber: number = 0;
  public currentTestLessonNumber: number = 0;
  public courseDescriptionFormGroup: FormGroup;
  public courseImage: File;
  public courseId: number;
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

  public courseContent: LessonModel = {
    name: "FIRST ONE",
    slideContent: [this.textContent, this.videoContent, this.audioContent, this.imageContent]
  };
  public courseContent2: LessonModel = {
    name: "VTOROI",
    slideContent: [this.textContent, this.textContent, this.imageContent, this.imageContent]
  };

  public createdCourse: CourseModel = {
    id: 1,
    name: "First one",
    shortDescription: "Short descr",
    fullDescription: "Full descr",
    price: 123,
    imagePath: "abcd",
    courseContent: [this.courseContent, this.courseContent2]
  }

  public courseTest: CourseTestModel;

  constructor(private matDialog: MatDialog,
              private courseService: CourseService,
              private fileService: FileService,
              private testService: TestService) {
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
      imagePath: "",
      price: this.courseDescriptionFormGroup.controls["coursePrice"].value,
      courseContent: []
    }
    this.fileService.uploadFile(this.courseImage).subscribe((url: string) => this.createdCourse.imagePath = url);
    this.currentStep = 2;
  }

  public onClickSaveSecondStep(): void {
    this.courseTest = {
      id: 1,
      courseId: 1,
      testContent: [],
      percentsToPass: 50
    };
    this.onCourseTestLessonAdd();
    this.currentStep = 3;
  }

  public onClickSaveThirdStep(): void {
    console.log(this.createdCourse);
    console.log(this.courseTest);
    this.courseService.saveCourse(this.createdCourse)
      .pipe(
        switchMap((courseId: string) => {
          this.courseTest.courseId = +courseId;
          return this.testService.saveTest(this.courseTest);
        }),
        switchMap((testId: string) => {
          return this.testService.saveTestQuestionAnswers(this.getTestQuestionAnswerModels(+testId));
        })
      )
      .subscribe(() => alert("Course was created successfully"));
  }

  private getTestQuestionAnswerModels(testId: number): TestQuestionAnswerModel[] {
    const answers: TestQuestionAnswerModel[] = [];
    this.courseTest.testContent.forEach((testLessonModel: TestLessonModel, index: number) => {
      let answer: string;
      if (testLessonModel.testQuestionForm.testQuestionType === TestQuestionTypesConstantsModel.RADIO_BUTTON_QUESTION_TYPE) {
        answer = ((<RadioButtonQuestionModel>testLessonModel.testQuestionForm.testQuestionContent).correctOptionNumber).toString();
      } else if (testLessonModel.testQuestionForm.testQuestionType === TestQuestionTypesConstantsModel.TEXT_QUESTION_TYPE) {
        answer = (<TestTextQuestionModel>testLessonModel.testQuestionForm.testQuestionContent).answer;
      }
      const correctAnswer: TestQuestionAnswerModel = {
        questionAnswer: answer,
        questionNumber: index,
        testId: testId
      };
      answers.push(correctAnswer);
    });
    return answers;
  }

  public openLessonDialog() {
    const dialogRef = this.matDialog.open(AddNewLessonPopupComponent);
    dialogRef.afterClosed().subscribe((lessonName: string) => {
      this.addNewLesson(lessonName);
    });
  }

  public addNewLesson(lessonName: string): void {
    if (lessonName) {
      (<LessonModel[]>this.createdCourse.courseContent).push({name: lessonName, slideContent: []});
      this.currentLessonNumber = this.createdCourse.courseContent.length - 1;
    }
  }

  public openCourseContentDialog(): Observable<SlideContentModel> {
    const dialogRef = this.matDialog.open(AddCourseContentPopupComponent);
    return dialogRef.afterClosed()
      .pipe(
        switchMap((courseContent: SlideContentModel) => {
          if (courseContent?.slideContentType === SlideContentConstantsModel.IMAGE_SLIDE_TYPE || courseContent?.slideContentType === SlideContentConstantsModel.AUDIO_SLIDE_TYPE) {
            return this.fileService.uploadFile(courseContent.slideContent)
              .pipe(
                map((url: string) => {
                  courseContent.slideContent = url;
                  return courseContent;
                })
              )
          } else {
            return of(courseContent);
          }
        }));
  }

  public onCourseContentAdd(): void {
    this.openCourseContentDialog().subscribe((slideContent: SlideContentModel) => {
      if (slideContent) {
        (<LessonModel>this.createdCourse.courseContent[this.currentLessonNumber]).slideContent.push(slideContent);
      }
    });
  }

  public onCourseTestLessonAdd(): void {
    const testLesson: TestLessonModel = {
      testSlideQuestionContent: [],
      testQuestionForm: {
        testQuestionContent: [],
        testQuestionType: TestQuestionTypesConstantsModel.RADIO_BUTTON_QUESTION_TYPE
      }
    }
    this.courseTest.testContent.push(testLesson);
  }

  public onCourseTestContentAdd(): void {
    this.openCourseContentDialog().subscribe((slideContent: SlideContentModel) => {
      if (slideContent) {
        this.courseTest.testContent[this.currentTestLessonNumber].testSlideQuestionContent.push(slideContent);
      }
    });
  }

  public onCourseLessonNumberChange(lessonNumber: number): void {
    this.currentLessonNumber = lessonNumber;
  }

  public onTestLessonNumberChange(lessonNumber: number): void {
    this.currentTestLessonNumber = lessonNumber;
  }

  public onAddTestQuestion(): void {
    const dialogRef = this.matDialog.open(AddCourseTestQuestionPopupComponent);
    dialogRef.afterClosed().subscribe((questionModel: QuestionFormContentModel) => {
      this.courseTest.testContent[this.currentTestLessonNumber].testQuestionForm = questionModel;
      console.log(questionModel);
    });
  }

  public onCourseImageChosen(file: File): void {
    this.courseImage = file;
  }

  public onTestInfoUpdate(test: CourseTestModel) {
    console.log(this.courseTest);
  }

}
