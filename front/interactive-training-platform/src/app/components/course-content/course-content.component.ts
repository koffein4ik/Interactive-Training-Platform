import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {SlideContentModel} from "../../models/slide-content.model";
import {SlideContentConstantsModel} from "../../models/slide-content-constants.model";

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.less']
})
export class CourseContentComponent implements OnInit {

  @Input()
  public isAddNewCourse: boolean;

  @Input()
  public course: CourseModel;

  @Input()
  public currentLessonNumber: number = 0;

  @Output()
  public onAddNewLessonClick: EventEmitter<void> = new EventEmitter();

  @Output()
  public onAddCourseContentClick: EventEmitter<SlideContentModel> = new EventEmitter<SlideContentModel>();

  @Output()
  public onLessonNumberChange: EventEmitter<number> = new EventEmitter<number>();

  public readonly TEXT_SLIDE_TYPE: string = SlideContentConstantsModel.TEXT_SLIDE_TYPE;
  public readonly VIDEO_SLIDE_TYPE: string = SlideContentConstantsModel.VIDEO_SLIDE_TYPE;
  public readonly AUDIO_SLIDE_TYPE: string = SlideContentConstantsModel.AUDIO_SLIDE_TYPE;
  public readonly IMAGE_SLIDE_TYPE: string = SlideContentConstantsModel.IMAGE_SLIDE_TYPE;
  public readonly RADIO_BUTTON_SLIDE_TYPE: string = SlideContentConstantsModel.RADIO_BUTTON_SLIDE_TYPE;

  constructor() { }

  public ngOnInit(): void {
    // for (let i = 0; i < 30; i++) {
    //   this.course.courseContent.push(this.courseContent2);
    // }
  }

  public onCourseLessonChange(lessonNumber: number): void {
    this.onLessonNumberChange.emit(lessonNumber);
  }

}
