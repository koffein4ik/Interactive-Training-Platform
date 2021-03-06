import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {RadioButtonQuestionModel} from "../../models/radio-button-question.model";

@Component({
  selector: 'app-radio-button-content-container',
  templateUrl: './radio-button-content-container.component.html',
  styleUrls: ['./radio-button-content-container.component.less']
})
export class RadioButtonContentContainerComponent implements OnInit {

  @Input()
  public isAddNewCourse: boolean;

  @Input()
  public radioButtonContent: RadioButtonQuestionModel;

  @Input()
  public userSubmittedAnswer: string;

  @Output()
  public onRadioButtonModify: EventEmitter<RadioButtonQuestionModel> = new EventEmitter<RadioButtonQuestionModel>();

  @Output()
  public onSaveAnswer: EventEmitter<string> = new EventEmitter<string>();

  public selectedOption: string;
  public previousSubmittedValue: string;
  public selectedOptionIndex: number = -1;
  public hint: string;
  public newOption: string;
  public title: string;

  constructor() { }

  public ngOnInit(): void {
  }

  public onAddOptionClick(): void {
    this.radioButtonContent.options.push(this.newOption);
    this.onRadioButtonModify.emit(this.radioButtonContent);
    this.newOption = "";
  }

  public onAddHintClick(): void {
    this.radioButtonContent.hint = this.hint;
    this.onRadioButtonModify.emit(this.radioButtonContent);
  }

  public markOptionAsCorrect(): void {
    this.radioButtonContent.correctOptionNumber = this.selectedOptionIndex;
    this.onRadioButtonModify.emit(this.radioButtonContent);
  }

  public onAddTitleClick(): void {
    this.radioButtonContent.title = this.title;
    this.onRadioButtonModify.emit(this.radioButtonContent);
  }

  public onSelectedValueChange(index: number): void {
    this.selectedOptionIndex = index;
  }

  public onSubmitAnswer(): void {
    this.onSaveAnswer.emit(this.selectedOptionIndex.toString());
    this.previousSubmittedValue = this.selectedOption;
  }

}
