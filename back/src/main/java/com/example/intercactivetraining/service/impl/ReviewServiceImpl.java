package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.model.ReviewEntity;
import com.example.intercactivetraining.repository.ReviewRepository;
import com.example.intercactivetraining.service.ReviewService;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public final ReviewRepository reviewRepository;

    public Iterable<ReviewEntity> getCourseReviews(int courseId) {
        return this.reviewRepository.getByCourseId(courseId);
    }

    @Override
    public void addCourseReview(ReviewEntity reviewEntity) {
        this.reviewRepository.save(reviewEntity);
    }

}
