package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.model.*;
import com.example.intercactivetraining.repository.TestQuestionAnswerRepository;
import com.example.intercactivetraining.repository.TestRepository;
import com.example.intercactivetraining.service.CourseStatusService;
import com.example.intercactivetraining.service.TestService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class TestServiceImpl implements TestService {

    public TestServiceImpl(TestRepository testRepository,
                           TestQuestionAnswerRepository testQuestionAnswerRepository,
                           CourseStatusService courseStatusService) {
        this.testRepository = testRepository;
        this.testQuestionAnswerRepository = testQuestionAnswerRepository;
        this.courseStatusService = courseStatusService;
    }

    private final TestRepository testRepository;
    private final TestQuestionAnswerRepository testQuestionAnswerRepository;
    private final CourseStatusService courseStatusService;

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

    @Override
    public String checkAnswers(UserTestQuestionAnswers userTestQuestionAnswers, int userId) {
        int correctAnswers = 0;
        List<TestQuestionAnswerEntity> testQuestionAnswers = testQuestionAnswerRepository.findAllByTestId(userTestQuestionAnswers.getTestId());
        for (TestQuestionAnswerEntity testQuestionAnswer : testQuestionAnswers) {
            String userAnswer = userTestQuestionAnswers.getAnswers().get(testQuestionAnswer.getQuestionNumber());
            if (userAnswer.equals(testQuestionAnswer.getQuestionAnswer())) {
                correctAnswers++;
            }
        }
        TestEntity test = testRepository.findById(userTestQuestionAnswers.getTestId()).orElse(null);
        if (test != null) {
            if ((correctAnswers * 100 / testQuestionAnswers.size()) > test.getPercentsToPass()) {
                UserCourseStatusEntity userCourseStatusEntity = courseStatusService.getCourseUserStatus(userId, test.getCourseId());
                CourseStatusEntity passedCourseStatus = courseStatusService.getPassesCourseStatus();
                if (userCourseStatusEntity != null) {
                    userCourseStatusEntity.setStatus(passedCourseStatus);
                    courseStatusService.updateCourseStatus(userCourseStatusEntity);
                    return "Success";
                }
            } else {
                return "Failed";
            }
        }
        return "Error";
    }
}
