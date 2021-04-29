package com.example.intercactivetraining.controller;

import com.example.intercactivetraining.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private UserService userService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/test")
    public String test() {
        return "Hello, world " + userService.getUserId();
    }


}
