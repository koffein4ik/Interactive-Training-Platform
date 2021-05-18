package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.model.CourseEntity;
import com.example.intercactivetraining.model.CourseStatusEntity;
import com.example.intercactivetraining.model.UserCourseStatusEntity;
import com.example.intercactivetraining.model.UserEntity;
import com.example.intercactivetraining.repository.CourseStatusRepository;
import com.example.intercactivetraining.repository.UserCourseStatusRepository;
import com.example.intercactivetraining.service.CourseStatusService;
import org.springframework.stereotype.Service;

@Service
public class CourseStatusServiceImpl implements CourseStatusService {

    public CourseStatusServiceImpl(UserCourseStatusRepository userCourseStatusRepository,
                                   CourseStatusRepository courseStatusRepository) {
        this.userCourseStatusRepository = userCourseStatusRepository;
        this.courseStatusRepository = courseStatusRepository;
    }

    public final UserCourseStatusRepository userCourseStatusRepository;
    public final CourseStatusRepository courseStatusRepository;

    @Override
    public UserCourseStatusEntity getCourseUserStatus(int userId, int courseId) {
        return this.userCourseStatusRepository.getByCourseIdAndUserId(courseId, userId).orElse(null);
    }

    @Override
    public Iterable<UserCourseStatusEntity> getUserCourseStatuses(int userId) {
        return userCourseStatusRepository.getByUserId(userId);
    }

    @Override
    public Iterable<UserCourseStatusEntity> getUserCourseStatusesByAuthor(int authorId) {
        return userCourseStatusRepository.getByCourse_AuthorId(authorId);
    }

    @Override
    public UserCourseStatusEntity applyForCourse(int userId, int courseId) {
        CourseStatusEntity courseStatusEntity = courseStatusRepository.findByStatusName("Applied").orElse(null);
        UserCourseStatusEntity userCourseStatusEntity = null;
        CourseEntity courseEntity = null;
        courseEntity.setId(courseId);
        UserEntity userEntity = null;
        userEntity.setId(userId);
        userCourseStatusEntity.setUser(userEntity);
        userCourseStatusEntity.setStatus(courseStatusEntity);
        return this.userCourseStatusRepository.save(userCourseStatusEntity);
    }

    @Override
    public Iterable<CourseStatusEntity> getAllCourseStatuses() {
        return courseStatusRepository.findAll();
    }

    @Override
    public CourseStatusEntity getPassesCourseStatus() {
        return courseStatusRepository.findByStatusName("Passed").orElse(null);
    }

    @Override
    public UserCourseStatusEntity updateCourseStatus(UserCourseStatusEntity userCourseStatusEntity) {
        return userCourseStatusRepository.save(userCourseStatusEntity);
    }
}
