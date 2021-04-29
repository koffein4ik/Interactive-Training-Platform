import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {SlideContentConstantsModel} from "../../models/slide-content-constants.model";
import {SlideContentModel} from "../../models/slide-content.model";

@Component({
  selector: 'app-add-course-content-popup',
  templateUrl: './add-course-content-popup.component.html',
  styleUrls: ['./add-course-content-popup.component.less']
})
export class AddCourseContentPopupComponent implements OnInit {

  public selectedOption: string;

  public content: any;

  public readonly TEXT_SLIDE_TYPE: string = SlideContentConstantsModel.TEXT_SLIDE_TYPE;
  public readonly VIDEO_SLIDE_TYPE: string = SlideContentConstantsModel.VIDEO_SLIDE_TYPE;
  public readonly AUDIO_SLIDE_TYPE: string = SlideContentConstantsModel.AUDIO_SLIDE_TYPE;
  public readonly IMAGE_SLIDE_TYPE: string = SlideContentConstantsModel.IMAGE_SLIDE_TYPE;
  public readonly RADIO_BUTTON_SLIDE_TYPE: string = SlideContentConstantsModel.RADIO_BUTTON_SLIDE_TYPE;

  constructor(public dialogRef: MatDialogRef<AddCourseContentPopupComponent>) { }

  public ngOnInit(): void {

  }

  public onSelectedOptionChange(): void {
    this.content = "";
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onSave(): void {
    const slideContent: SlideContentModel = {
      slideContentType: this.selectedOption,
      slideContent: this.content
    }
    this.dialogRef.close(slideContent);
  }

}
