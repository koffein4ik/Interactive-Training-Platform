package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.CourseEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface CourseRepository extends PagingAndSortingRepository<CourseEntity, Integer> {
    List<CourseEntity> findAllByPreviousCourseId(Integer previousCourseId);

    Iterable<CourseEntity> findAllByAuthorId(int authorId);

    Optional<CourseEntity> findFirstByPreviousCourseId(int courseId);
}
