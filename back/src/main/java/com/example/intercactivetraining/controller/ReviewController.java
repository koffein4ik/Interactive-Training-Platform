package com.example.intercactivetraining.controller;

import com.example.intercactivetraining.model.ReviewEntity;
import com.example.intercactivetraining.model.UserEntity;
import com.example.intercactivetraining.service.ReviewService;
import com.example.intercactivetraining.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://itp.com:4200")
@RequestMapping("/api/review")
public class ReviewController {

    public ReviewController(ReviewService reviewService, UserService userService) {
        this.userService = userService;
        this.reviewService = reviewService;
    }

    public final ReviewService reviewService;
    public final UserService userService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/addCourseReview")
    public void addCourseReview(@RequestBody ReviewEntity reviewEntity) {
        int userId = userService.getUserId();
        UserEntity userEntity = new UserEntity();
        userEntity.setId(userId);
        reviewEntity.setAuthor(userEntity);
        reviewService.addCourseReview(reviewEntity);
    }

    @GetMapping("/getCourseReviews/{id}")
    public Iterable<ReviewEntity> getCourseReviews(@PathVariable(name = "id") String courseId) {
        return reviewService.getCourseReviews(Integer.parseInt(courseId));
    }
}
