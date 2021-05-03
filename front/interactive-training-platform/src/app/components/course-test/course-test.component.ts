import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseTestModel} from "../../models/course-test.model";
import {SlideContentConstantsModel} from "../../models/slide-content-constants.model";

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
  public currentTestQuestionNumber: number;

  @Output()
  public onAddNewTestLessonClick: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public onAddTestContentClick: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public onTestLessonNumberChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public onAddTestQuestion: EventEmitter<void> = new EventEmitter<void>();

  public readonly TEXT_SLIDE_TYPE: string = SlideContentConstantsModel.TEXT_SLIDE_TYPE;
  public readonly VIDEO_SLIDE_TYPE: string = SlideContentConstantsModel.VIDEO_SLIDE_TYPE;
  public readonly AUDIO_SLIDE_TYPE: string = SlideContentConstantsModel.AUDIO_SLIDE_TYPE;
  public readonly IMAGE_SLIDE_TYPE: string = SlideContentConstantsModel.IMAGE_SLIDE_TYPE;

  constructor() { }

  ngOnInit(): void {
  }

  public onTestLessonChange(newQuestionNumber: number): void {
    this.onTestLessonNumberChange.emit(newQuestionNumber)
  }

}
