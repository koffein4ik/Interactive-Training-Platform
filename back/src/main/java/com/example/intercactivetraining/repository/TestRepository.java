package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.TestEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface TestRepository extends PagingAndSortingRepository<TestEntity, Integer> {
    Optional<TestEntity> findByCourseId(int courseId);
}
