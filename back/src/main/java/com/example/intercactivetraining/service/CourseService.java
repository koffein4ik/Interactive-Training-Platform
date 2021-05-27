package com.example.intercactivetraining.service;

import com.example.intercactivetraining.model.CourseEntity;

public interface CourseService {
    int saveCourse(CourseEntity courseEntity);

    Iterable<CourseEntity> getAllCourses();

    CourseEntity getCourseById(String id);

    CourseEntity getCourseContentById(int courseId, int userId);

    Iterable<CourseEntity> getAllCoursesByAuthor(int userId);

    CourseEntity getNextCourseByCurrentCourseId(int courseId);
}
