import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TestTextQuestionModel} from "../../models/test-text-question.model";

@Component({
  selector: 'app-test-question-container',
  templateUrl: './test-question-container.component.html',
  styleUrls: ['./test-question-container.component.less']
})
export class TestQuestionContainerComponent implements OnInit {

  @Input()
  public testTextQuestion: TestTextQuestionModel;

  @Input()
  public isAddNewCourse: boolean;

  @Input()
  public userSubmittedAnswer: string;

  @Output()
  public onQuestionModify: EventEmitter<TestTextQuestionModel> = new EventEmitter<TestTextQuestionModel>();

  @Output()
  public onAnswerSubmit: EventEmitter<string> = new EventEmitter<string>();

  public questionAnswer: string;
  public questionText: string;
  public userAnswer: string;
  public submittedAnswer: string;

  constructor() { }

  public ngOnInit(): void {
  }

  public onAddQuestion(): void {
    this.testTextQuestion.question = this.questionText;
    this.onQuestionModify.emit(this.testTextQuestion);
  }

  public onAddAnswer(): void {
    this.testTextQuestion.answer = this.questionAnswer;
    this.onQuestionModify.emit(this.testTextQuestion);
  }

  public onSaveAnswer(): void {
    this.onAnswerSubmit.emit(this.userAnswer);
    this.submittedAnswer = this.userAnswer;
  }

}
