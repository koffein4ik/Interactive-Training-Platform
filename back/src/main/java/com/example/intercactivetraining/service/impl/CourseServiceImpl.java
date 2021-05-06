package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.model.CourseEntity;
import com.example.intercactivetraining.repository.CourseRepository;
import com.example.intercactivetraining.service.CourseService;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    private final CourseRepository courseRepository;

    @Override
    public int saveCourse(CourseEntity courseEntity) {
        return courseRepository.save(courseEntity).getId();
    }

    @Override
    public Iterable<CourseEntity> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public CourseEntity getCourseById(String id) {
        return courseRepository.findById(Integer.parseInt(id)).orElse(null);
    }
}
