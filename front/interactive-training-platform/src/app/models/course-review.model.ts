import {UserModel} from "./user.model";

export class CourseReviewModel {
  id: number;
  courseId: number;
  author: UserModel;
  reviewContent: string;
}
