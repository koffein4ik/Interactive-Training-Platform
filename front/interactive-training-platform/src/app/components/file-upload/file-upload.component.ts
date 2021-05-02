import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UploadFileConstants} from "../../models/upload-file.constants";

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

  @Input()
  public showSaveButton: boolean;

  @Output()
  public onFileChosen: EventEmitter<File> = new EventEmitter();

  public fileToUpload: File;
  public fileContent: string;

  public readonly AUDIO_FILE_TYPE: string = UploadFileConstants.AUDIO_FILE_TYPE;
  public readonly IMAGE_FILE_TYPE: string = UploadFileConstants.IMAGE_FILE_TYPE;

  constructor() {
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
      this.onFileChosen.emit(this.fileToUpload);
    }
  }

}
