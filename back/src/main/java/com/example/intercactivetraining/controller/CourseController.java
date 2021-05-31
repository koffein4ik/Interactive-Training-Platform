package com.example.intercactivetraining.controller;

import com.example.intercactivetraining.model.CourseEntity;
import com.example.intercactivetraining.model.ModuleEntity;
import com.example.intercactivetraining.service.CourseService;
import com.example.intercactivetraining.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://itp.com:4200")
@RequestMapping("/api/course")
public class CourseController {

    public CourseController(UserService userService, CourseService courseService) {
        this.userService = userService;
        this.courseService = courseService;
    }

    private final UserService userService;
    private final CourseService courseService;

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

    @GetMapping("/getAllCoursesByAuthor")
    public Iterable<CourseEntity> getAllCoursesByAutor() {
        int userId = userService.getUserId();
        return this.courseService.getAllCoursesByAuthor(userId);
    }

    @GetMapping("/getCourseById/{id}")
    public CourseEntity getCourseById(@PathVariable(name = "id") String id) {
        return this.courseService.getCourseById(id);
    }

    @GetMapping("/getCourseContentById/{id}")
    public CourseEntity getCourseContentById(@PathVariable(name = "id") String id) {
        int userId = userService.getUserId();
        return this.courseService.getCourseContentById(Integer.parseInt(id), userId);
    }

    @GetMapping("/getNextCourseByCurrentCourseId/{id}")
    public CourseEntity getNextCourseByCurrentCourseId(@PathVariable(name = "id") String id) {
        return this.courseService.getNextCourseByCurrentCourseId(Integer.parseInt(id));
    }

    @PostMapping("/createModule")
    public void createModule(@RequestBody ModuleEntity moduleEntity) {
        int userId = userService.getUserId();
        moduleEntity.setAuthorId(userId);
        this.courseService.createModule(moduleEntity);
    }

    @GetMapping("/getAllModulesByAuthor")
    public Iterable<ModuleEntity> getAllModulesByAuthor() {
        int userId = userService.getUserId();
        return this.courseService.getAllModulesByAuthor(userId);
    }
}
