import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseTestModel} from "../../models/course-test.model";
import {SlideContentConstantsModel} from "../../models/slide-content-constants.model";
import {TestQuestionTypesConstantsModel} from "../../models/test-question-types.constants.model";
import {UserTestQuestionAnswersModel} from "../../models/user-test-question-answers.model";

@Component({
  selector: 'app-course-test',
  templateUrl: './course-test.component.html',
  styleUrls: ['./course-test.component.less']
})
export class CourseTestComponent implements OnInit {

  @Input()
  public isAddNewTest: boolean;

  @Input()
  public test: CourseTestModel;

  @Input()
  public currentTestQuestionNumber: number = 0;

  @Output()
  public onAddNewTestLessonClick: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public onAddTestContentClick: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public onTestLessonNumberChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public onAddTestQuestion: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public onFinishTest: EventEmitter<UserTestQuestionAnswersModel> = new EventEmitter<UserTestQuestionAnswersModel>();

  public editingPercentsMode: boolean;
  public percents: number;
  public userTestQuestionAnswers: UserTestQuestionAnswersModel;

  public readonly TEXT_SLIDE_TYPE: string = SlideContentConstantsModel.TEXT_SLIDE_TYPE;
  public readonly VIDEO_SLIDE_TYPE: string = SlideContentConstantsModel.VIDEO_SLIDE_TYPE;
  public readonly AUDIO_SLIDE_TYPE: string = SlideContentConstantsModel.AUDIO_SLIDE_TYPE;
  public readonly IMAGE_SLIDE_TYPE: string = SlideContentConstantsModel.IMAGE_SLIDE_TYPE;

  public readonly RADIO_BUTTON_QUESTION_TYPE: string = TestQuestionTypesConstantsModel.RADIO_BUTTON_QUESTION_TYPE;
  public readonly TEXT_QUESTION_TYPE: string = TestQuestionTypesConstantsModel.TEXT_QUESTION_TYPE;

  constructor() { }

  ngOnInit(): void {
    this.userTestQuestionAnswers = {
      testId: this.test.id,
      answers: {}
    }
  }

  public togglePercentsEditingMode(): void {
    this.editingPercentsMode = !this.editingPercentsMode;
  }

  public onTestLessonChange(newQuestionNumber: number): void {
    this.currentTestQuestionNumber = newQuestionNumber;
    this.onTestLessonNumberChange.emit(newQuestionNumber)
  }

  public saveUpdatedPercents(): void {
    this.test.percentsToPass = this.percents;
    this.togglePercentsEditingMode();
  }

  public onSaveAnswer(questionNumber: number, answer: string): void {
    this.userTestQuestionAnswers.answers[questionNumber] = answer;
  }

  public finishTest(): void {
    console.log(this.userTestQuestionAnswers);
    this.onFinishTest.emit(this.userTestQuestionAnswers);
  }

  public isFinishButtonDisabled(): boolean {
    return this.test.testContent.length !== Object.keys(this.userTestQuestionAnswers.answers).length;
  }

}
