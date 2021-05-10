package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.TestQuestionAnswerEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface TestQuestionAnswerRepository extends PagingAndSortingRepository<TestQuestionAnswerEntity, Integer> {
    List<TestQuestionAnswerEntity> findAllByTestId(int testId);
}
