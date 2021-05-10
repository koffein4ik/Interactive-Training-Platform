package com.example.intercactivetraining.controller;

import com.example.intercactivetraining.model.TestEntity;
import com.example.intercactivetraining.model.TestQuestionAnswerEntity;
import com.example.intercactivetraining.model.UserTestQuestionAnswers;
import com.example.intercactivetraining.service.TestService;
import com.example.intercactivetraining.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://itp.com:4200")
@RequestMapping("/api/test")
public class TestController {

    public TestController(TestService testService, UserService userService) {
        this.testService = testService;
        this.userService = userService;
    }

    private final TestService testService;
    private final UserService userService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/saveTest")
    public int saveTest(@RequestBody TestEntity testEntity) {
        return testService.saveTest(testEntity);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/saveTestQuestionAnswers")
    public void saveTestQuestionAnswers(@RequestBody TestQuestionAnswerEntity[] testQuestionAnswers) {
        testService.saveTestQuestionAnswers(testQuestionAnswers);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/checkAnswers")
    public String checkAnswers(@RequestBody UserTestQuestionAnswers userTestQuestionAnswers) {
        int userId = userService.getUserId();
        return testService.checkAnswers(userTestQuestionAnswers, userId);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/getCourseTest/{id}")
    public TestEntity getCourseTest(@PathVariable(name = "id") String courseId) {
        return testService.getCourseTest(Integer.parseInt(courseId));
    }
}
