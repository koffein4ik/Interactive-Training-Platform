import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {AddNewCourseComponent} from "./components/add-new-course/add-new-course.component";
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [
  {path: "registration", component: RegistrationComponent},
  {path: "add-new-course", component: AddNewCourseComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
