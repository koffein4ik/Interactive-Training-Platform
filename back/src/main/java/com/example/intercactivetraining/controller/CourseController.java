package com.example.intercactivetraining.controller;

import com.example.intercactivetraining.model.CourseEntity;
import com.example.intercactivetraining.service.CourseService;
import com.example.intercactivetraining.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://itp.com:4200")
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private UserService userService;

    @Autowired
    private CourseService courseService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/test")
    public String test() {
        return "Hello, world " + userService.getUserId();
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/saveCourse")
    public int saveCourse(@RequestBody CourseEntity courseEntity) {
        int userId = userService.getUserId();
        courseEntity.setAuthorId(userId);
        return courseService.saveCourse(courseEntity);
    }

    @GetMapping("/getAllCourses")
    public Iterable<CourseEntity> getAllCourses() {
        return this.courseService.getAllCourses();
    }

    @GetMapping("/getCourseById/{id}")
    public CourseEntity getCourseById(@PathVariable(name = "id") String id) {
        return this.courseService.getCourseById(id);
    }
}
