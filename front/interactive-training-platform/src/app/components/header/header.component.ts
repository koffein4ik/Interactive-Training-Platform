import { Component, OnInit } from '@angular/core';
import {UserCourseStatusService} from "../../services/user-course-status.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private userCourseStatusService: UserCourseStatusService) { }

  public ngOnInit(): void {
  }

}
