package com.example.intercactivetraining.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "usercoursestatus", schema = "interactivetrainingplatform", catalog = "")
public class UserCourseStatusEntity {
    private int id;
    private UserEntity user;
    private CourseStatusEntity status;
    private CourseEntity course;

    @Id
    @Column(name = "Id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @OneToOne
    @JoinColumn(name = "UserId", referencedColumnName = "Id")
    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity userId) {
        this.user = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserCourseStatusEntity that = (UserCourseStatusEntity) o;
        return id == that.id && Objects.equals(user, that.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user);
    }

    @OneToOne
    @JoinColumn(name = "StatusId", referencedColumnName = "Id")
    public CourseStatusEntity getStatus() {
        return status;
    }

    public void setStatus(CourseStatusEntity status) {
        this.status = status;
    }

    @OneToOne
    @JoinColumn(name = "CourseId", referencedColumnName = "Id")
    public CourseEntity getCourse() {
        return course;
    }

    public void setCourse(CourseEntity course) {
        this.course = course;
    }
}
