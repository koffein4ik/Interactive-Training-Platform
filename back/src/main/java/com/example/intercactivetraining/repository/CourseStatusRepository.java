package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.CourseStatusEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface CourseStatusRepository extends PagingAndSortingRepository<CourseStatusEntity, Integer> {
    Optional<CourseStatusEntity> findByStatusName(String statusName);
}
