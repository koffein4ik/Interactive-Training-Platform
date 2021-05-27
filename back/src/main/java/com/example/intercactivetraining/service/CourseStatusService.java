package com.example.intercactivetraining.service;

import com.example.intercactivetraining.model.CourseStatusEntity;
import com.example.intercactivetraining.model.UserCourseStatusEntity;

public interface CourseStatusService {
    UserCourseStatusEntity getCourseUserStatus(int userId, int courseId);

    UserCourseStatusEntity applyForCourse(int userId, int courseId);

    Iterable<UserCourseStatusEntity> getUserCourseStatuses(int userId);

    Iterable<UserCourseStatusEntity> getUserCourseStatusesByAuthor(int authorId);

    Iterable<CourseStatusEntity> getAllCourseStatuses();

    UserCourseStatusEntity updateCourseStatus(UserCourseStatusEntity userCourseStatusEntity);

    CourseStatusEntity getPassesCourseStatus();

    CourseStatusEntity getAvailableCourseStatus();

    Iterable<UserCourseStatusEntity> getCourseStatusesByCourseId(int courseId);
}
