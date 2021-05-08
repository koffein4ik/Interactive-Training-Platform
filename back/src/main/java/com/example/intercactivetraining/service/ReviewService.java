package com.example.intercactivetraining.service;

import com.example.intercactivetraining.model.ReviewEntity;

public interface ReviewService {
    Iterable<ReviewEntity> getCourseReviews(int courseId);

    void addCourseReview(ReviewEntity reviewEntity);
}
