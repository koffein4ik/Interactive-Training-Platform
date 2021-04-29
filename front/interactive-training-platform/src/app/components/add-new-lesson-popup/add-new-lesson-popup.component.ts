import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-new-lesson-popup',
  templateUrl: './add-new-lesson-popup.component.html',
  styleUrls: ['./add-new-lesson-popup.component.less']
})
export class AddNewLessonPopupComponent implements OnInit {

  public lessonName: string;

  constructor(public dialogRef: MatDialogRef<AddNewLessonPopupComponent>) { }

  public ngOnInit(): void {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
