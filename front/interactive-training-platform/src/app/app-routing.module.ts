import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RegistrationComponent} from "./components/registration/registration.component";
import {AddNewCourseComponent} from "./components/add-new-course/add-new-course.component";
import {LoginComponent} from "./components/login/login.component";
import {AllCoursesComponent} from "./components/all-courses/all-courses.component";
import {CourseFullDescriptionComponent} from "./components/course-full-description/course-full-description.component";
import {MyCoursesComponent} from "./components/my-courses/my-courses.component";
import {MyCreatedCoursesComponent} from "./components/my-created-courses/my-created-courses.component";
import {CoursePageComponent} from "./components/course-page/course-page.component";
import {CourseStatisticsComponent} from "./components/coursestatistics/course-statistics.component";
import {AddModuleComponent} from "./components/add-module/add-module.component";


const routes: Routes = [
  {path: "registration", component: RegistrationComponent},
  {path: "add-new-course", component: AddNewCourseComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: AllCoursesComponent},
  {path: "course/:id", component: CourseFullDescriptionComponent},
  {path: "my-courses", component: MyCoursesComponent},
  {path: "my-created-courses", component: MyCreatedCoursesComponent},
  {path: "course-content/:id", component: CoursePageComponent},
  {path: "course-statistics/:id", component: CourseStatisticsComponent},
  {path: "add-new-module", component: AddModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
