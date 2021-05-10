package com.example.intercactivetraining.service;

import com.example.intercactivetraining.model.TestEntity;
import com.example.intercactivetraining.model.TestQuestionAnswerEntity;
import com.example.intercactivetraining.model.UserTestQuestionAnswers;

public interface TestService {
    int saveTest(TestEntity testEntity);

    void saveTestQuestionAnswers(TestQuestionAnswerEntity[] testQuestionAnswers);

    TestEntity getCourseTest(int courseId);

    String checkAnswers(UserTestQuestionAnswers userTestQuestionAnswers, int userId);
}
