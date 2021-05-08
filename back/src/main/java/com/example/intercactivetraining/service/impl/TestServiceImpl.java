package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.model.TestEntity;
import com.example.intercactivetraining.model.TestQuestionAnswerEntity;
import com.example.intercactivetraining.repository.TestQuestionAnswerRepository;
import com.example.intercactivetraining.repository.TestRepository;
import com.example.intercactivetraining.service.TestService;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class TestServiceImpl implements TestService {

    public TestServiceImpl(TestRepository testRepository, TestQuestionAnswerRepository testQuestionAnswerRepository) {
        this.testRepository = testRepository;
        this.testQuestionAnswerRepository = testQuestionAnswerRepository;
    }

    private final TestRepository testRepository;
    private final TestQuestionAnswerRepository testQuestionAnswerRepository;

    @Override
    public int saveTest(TestEntity testEntity) {
        return testRepository.save(testEntity).getId();
    }

    @Override
    public void saveTestQuestionAnswers(TestQuestionAnswerEntity[] testQuestionAnswers) {
        testQuestionAnswerRepository.saveAll(Arrays.asList(testQuestionAnswers.clone()));
    }

    @Override
    public TestEntity getCourseTest(int courseId) {
        return testRepository.findByCourseId(courseId).orElse(null);
    }
}
