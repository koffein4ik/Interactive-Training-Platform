package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.model.CourseEntity;
import com.example.intercactivetraining.model.UserCourseStatusEntity;
import com.example.intercactivetraining.repository.CourseRepository;
import com.example.intercactivetraining.service.CourseService;
import com.example.intercactivetraining.service.CourseStatusService;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {

    public CourseServiceImpl(CourseRepository courseRepository, CourseStatusService courseStatusService) {
        this.courseRepository = courseRepository;
        this.courseStatusService = courseStatusService;
    }

    private final CourseRepository courseRepository;

    private final CourseStatusService courseStatusService;

    @Override
    public int saveCourse(CourseEntity courseEntity) {
        return courseRepository.save(courseEntity).getId();
    }

    @Override
    public Iterable<CourseEntity> getAllCourses() {
        return courseRepository.findAllByPreviousCourseId(0);
    }

    @Override
    public CourseEntity getCourseById(String id) {
        return courseRepository.findById(Integer.parseInt(id)).orElse(null);
    }

    @Override
    public CourseEntity getCourseContentById(int courseId, int userId) {
        UserCourseStatusEntity userCourseStatusEntity = courseStatusService.getCourseUserStatus(userId, courseId);
        if (userCourseStatusEntity != null) {
            if (userCourseStatusEntity.getStatus().getStatusName().equals("Available")) {
                return courseRepository.findById(courseId).orElse(null);
            }
            if (userCourseStatusEntity.getStatus().getStatusName().equals("Passed")) {
                throw new RuntimeException("You have already passed this course");
            }
        }
        throw new RuntimeException("Unauthorized for this course");
    }

    @Override
    public Iterable<CourseEntity> getAllCoursesByAuthor(int userId) {
        return courseRepository.findAllByAuthorId(userId);
    }

    @Override
    public CourseEntity getNextCourseByCurrentCourseId(int courseId) {
        return courseRepository.findFirstByPreviousCourseId(courseId).orElse(null);
    }
}
