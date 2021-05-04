package com.example.intercactivetraining.service;

import com.example.intercactivetraining.model.TestEntity;
import com.example.intercactivetraining.model.TestQuestionAnswerEntity;

public interface TestService {
    int saveTest(TestEntity testEntity);

    void saveTestQuestionAnswers(TestQuestionAnswerEntity[] testQuestionAnswers);
}
