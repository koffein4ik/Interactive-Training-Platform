import {SlideModel} from "./slide.model";

export class CourseModel {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  imagePath: string;
  courseContent: SlideModel[];
}
