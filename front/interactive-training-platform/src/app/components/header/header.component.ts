import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private courseService: CourseService) {
  }

  public isAuthorized: boolean = false;

  public ngOnInit(): void {
    this.authenticationService.isUserAuthorized
      .asObservable()
      .subscribe((isAuthorized: boolean) => {
        console.log(isAuthorized);
        this.isAuthorized = isAuthorized
      });
    this.courseService.test()
      .subscribe(() => {
          this.authenticationService.isUserAuthorized.next(true);
        },
        () => this.authenticationService.isUserAuthorized.next(false));
  }

  public onLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
