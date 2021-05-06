package com.example.intercactivetraining.service;

import com.example.intercactivetraining.model.CourseEntity;

public interface CourseService {
    int saveCourse(CourseEntity courseEntity);

    Iterable<CourseEntity> getAllCourses();

    CourseEntity getCourseById(String id);
}
