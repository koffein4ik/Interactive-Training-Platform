package com.example.intercactivetraining.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "reviews", schema = "interactivetrainingplatform", catalog = "")
public class ReviewEntity {
    private int id;
    private Integer courseId;
    private UserEntity author;
    private String reviewContent;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "CourseId")
    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    @OneToOne
    @JoinColumn(name = "AuthorId", referencedColumnName = "Id")
    public UserEntity getAuthor() {
        return author;
    }

    public void setAuthor(UserEntity authorId) {
        this.author = authorId;
    }

    @Basic
    @Column(name = "ReviewContent")
    public String getReviewContent() {
        return reviewContent;
    }

    public void setReviewContent(String reviewContent) {
        this.reviewContent = reviewContent;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReviewEntity that = (ReviewEntity) o;
        return id == that.id && Objects.equals(courseId, that.courseId) && Objects.equals(author, that.author) && Objects.equals(reviewContent, that.reviewContent);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, courseId, author, reviewContent);
    }
}
