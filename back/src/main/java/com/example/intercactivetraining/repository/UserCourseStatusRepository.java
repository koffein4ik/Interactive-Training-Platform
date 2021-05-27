package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.UserCourseStatusEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface UserCourseStatusRepository extends PagingAndSortingRepository<UserCourseStatusEntity, Integer> {
    Optional<UserCourseStatusEntity> getByCourseIdAndUserId(int courseId, int userId);
    Iterable<UserCourseStatusEntity> getByUserId(int userId);
    Iterable<UserCourseStatusEntity> getByCourse_AuthorId(int authorId);
    Iterable<UserCourseStatusEntity> getByCourse_Id(int courseId);
}
