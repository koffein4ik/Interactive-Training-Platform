import {CourseStatusModel} from "./course-status.model";
import {CourseModel} from "./course.model";
import {UserModel} from "./user.model";

export class UserCourseStatusModel {
  id: number;
  user: UserModel;
  course: CourseModel;
  status: CourseStatusModel;
}
