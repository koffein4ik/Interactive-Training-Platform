import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {QuestionFormContentModel} from "../../models/question-form-content.model";
import {TestQuestionTypesConstantsModel} from "../../models/test-question-types.constants.model";
import {RadioButtonQuestionModel} from "../../models/radio-button-question.model";

@Component({
  selector: 'app-add-course-test-question-popup',
  templateUrl: './add-course-test-question-popup.component.html',
  styleUrls: ['./add-course-test-question-popup.component.less']
})
export class AddCourseTestQuestionPopupComponent implements OnInit {

  public selectedOption: string;
  public content: any;

  public readonly RADIO_BUTTON_QUESTION_TYPE: string = TestQuestionTypesConstantsModel.RADIO_BUTTON_QUESTION_TYPE;
  public readonly TEXT_QUESTION_TYPE: string = TestQuestionTypesConstantsModel.TEXT_QUESTION_TYPE;

  constructor(public dialogRef: MatDialogRef<AddCourseTestQuestionPopupComponent>) { }

  public ngOnInit(): void {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onSelectedOptionChange(): void {
    if (this.selectedOption === this.RADIO_BUTTON_QUESTION_TYPE) {
      this.content = {
        options: [],
        correctOptionNumber: -1,
        hint: "",
        title: ""
      };
    } else if (this.selectedOption === this.TEXT_QUESTION_TYPE) {

    }
  }

  public isCourseTestQuestionValid(): boolean {
    if (this.selectedOption === this.RADIO_BUTTON_QUESTION_TYPE) {
      return this.content.options.length > 1 && this.content.correctOptionNumber !== -1 && this.content.title;
    } else if (this.selectedOption === this.TEXT_QUESTION_TYPE) {
      return true;
    }
  }

  public onContentUpdate(questionContent: any): void {
    this.content = questionContent;
  }

  public onSave(): void {
    const slideContent: QuestionFormContentModel = {
      testQuestionType: this.selectedOption,
      testQuestionContent: this.content
    }
    this.dialogRef.close(slideContent);
  }

}
