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

  @Output()
  public onQuestionModify: EventEmitter<TestTextQuestionModel> = new EventEmitter<TestTextQuestionModel>();

  public questionAnswer: string;
  public questionText: string;
  public userAnswer: string;

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

  }

}
