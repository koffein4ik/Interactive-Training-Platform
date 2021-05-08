package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.ReviewEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ReviewRepository extends PagingAndSortingRepository<ReviewEntity, Integer> {
    Iterable<ReviewEntity> getByCourseId(int courseId);
}
