import {TestLessonModel} from "./test-lesson.model";

export class CourseTestModel {
  id: number;
  courseId: number;
  percentsToPass: number;
  testContent: TestLessonModel[];
}
