package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.CourseEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CourseRepository extends PagingAndSortingRepository<CourseEntity, Integer> {
}
