import {LessonModel} from "./lesson.model";
import {ModuleModel} from "./module.model";

export class CourseModel {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  imagePath: string;
  courseContent: LessonModel[];
  previousCourseId: number;
  module: ModuleModel;
}
