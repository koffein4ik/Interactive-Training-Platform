import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {AddNewCourseComponent} from "./components/add-new-course/add-new-course.component";


const routes: Routes = [
  {path: "registration", component: RegistrationComponent},
  {path: "add-new-course", component: AddNewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
