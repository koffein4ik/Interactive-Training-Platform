import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CourseService} from "../../services/course.service";
import {ModuleModel} from "../../models/module.model";

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.less']
})
export class AddModuleComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private courseService: CourseService) { }

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  }

  public onCreateButtonClick(): void {
    const moduleModel: ModuleModel = {
      id: null,
      authorId: null,
      name: this.formGroup.controls["name"].value,
      description: this.formGroup.controls["description"].value
    }
    this.courseService.createModule(moduleModel).subscribe(() => alert("Module was created successfully"));
  }

}
