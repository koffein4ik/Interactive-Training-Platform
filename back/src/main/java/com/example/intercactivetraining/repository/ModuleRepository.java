package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.ModuleEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ModuleRepository extends PagingAndSortingRepository<ModuleEntity, Integer> {
}
