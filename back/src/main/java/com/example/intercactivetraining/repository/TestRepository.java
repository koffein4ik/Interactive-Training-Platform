package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.TestEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TestRepository extends PagingAndSortingRepository<TestEntity, Integer> {
}
