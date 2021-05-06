package com.example.intercactivetraining.controller;

import com.example.intercactivetraining.model.CourseStatusEntity;
import com.example.intercactivetraining.model.UserCourseStatusEntity;
import com.example.intercactivetraining.service.CourseStatusService;
import com.example.intercactivetraining.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://itp.com:4200")
@RequestMapping("/api/courseStatus")
public class CourseStatusController {
    public CourseStatusController(CourseStatusService courseStatusService, UserService userService) {
        this.courseStatusService = courseStatusService;
        this.userService = userService;
    }

    public CourseStatusService courseStatusService;
    public UserService userService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/getCourseStatusForUser/{id}")
    public UserCourseStatusEntity getCourseStatusForUser(@PathVariable(name = "id") String courseId) {
        int userId = userService.getUserId();
        return this.courseStatusService.getCourseUserStatus(userId, Integer.parseInt(courseId));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/applyForCourse/{id}")
    public UserCourseStatusEntity applyForCourse(@PathVariable(name = "id") String courseId) {
        int userId = userService.getUserId();
        return this.courseStatusService.applyForCourse(userId, Integer.parseInt(courseId));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/getUserCourseStatuses")
    public Iterable<UserCourseStatusEntity> getUserCourseStatuses() {
        int userId = userService.getUserId();
        return this.courseStatusService.getUserCourseStatuses(userId);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("getUserCourseStatusesByAuthor")
    public Iterable<UserCourseStatusEntity> getUserCourseStatusesByAuthor() {
        int userId = userService.getUserId();
        return this.courseStatusService.getUserCourseStatusesByAuthor(userId);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("getAllStatuses")
    public Iterable<CourseStatusEntity> getAllCourseStatuses() {
        return this.courseStatusService.getAllCourseStatuses();
    }
}
