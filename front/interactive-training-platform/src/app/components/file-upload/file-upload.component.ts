import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UploadFileConstants} from "../../models/upload-file.constants";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('myFileInput', {static: false}) myFileInput;

  @Input()
  public title: string;

  @Input()
  public fileType: UploadFileConstants;

  public fileToUpload: File;
  public fileContent: string;

  public readonly AUDIO_FILE_TYPE: string = UploadFileConstants.AUDIO_FILE_TYPE;
  public readonly IMAGE_FILE_TYPE: string = UploadFileConstants.IMAGE_FILE_TYPE;

  constructor(private sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
  }

  public onUploadFile(): void {

  }

  public handleFileInput(files: FileList): void {
    const reader = new FileReader();
    this.fileToUpload = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.fileContent = reader.result.toString();
    }
  }

}
