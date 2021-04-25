import { Component, OnInit } from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {SlideContentModel} from "../../models/slide-content.model";
import {LessonModel} from "../../models/lessonModel";
import {SlideContentConstantsModel} from "../../models/slide-content-constants.model";

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.less']
})
export class CourseContentComponent implements OnInit {

  public readonly TEXT_SLIDE_TYPE: string = SlideContentConstantsModel.TEXT_SLIDE_TYPE;
  public readonly VIDEO_SLIDE_TYPE: string = SlideContentConstantsModel.VIDEO_SLIDE_TYPE;
  public readonly AUDIO_SLIDE_TYPE: string = SlideContentConstantsModel.AUDIO_SLIDE_TYPE;
  public readonly IMAGE_SLIDE_TYPE: string = SlideContentConstantsModel.IMAGE_SLIDE_TYPE;
  public readonly RADIO_BUTTON_SLIDE_TYPE: string = SlideContentConstantsModel.RADIO_BUTTON_SLIDE_TYPE;

  public currentLessonNumber: number = 0;

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

  public course: CourseModel = {
    id: 1,
    name: "First one",
    shortDescription: "Short descr",
    fullDescription: "Full descr",
    price: 123,
    imagePath: "abcd",
    courseContent: [this.courseContent, this.courseContent2]
  }

  constructor() { }

  public ngOnInit(): void {
    // for (let i = 0; i < 30; i++) {
    //   this.course.courseContent.push(this.courseContent2);
    // }
  }

  public onCourseLessonChange(lessonNumber: number): void {
    this.currentLessonNumber = lessonNumber;
  }

}
