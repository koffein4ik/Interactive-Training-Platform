package com.example.intercactivetraining.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "tests", schema = "interactivetrainingplatform", catalog = "")
public class TestEntity {
    private int id;
    private Integer courseId;
    private String testContent;
    private Integer percentsToPass;

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

    @Basic
    @Column(name = "TestContent")
    public String getTestContent() {
        return testContent;
    }

    public void setTestContent(String testContent) {
        this.testContent = testContent;
    }

    @Basic
    @Column(name = "PercentsToPass")
    public Integer getPercentsToPass() {
        return percentsToPass;
    }

    public void setPercentsToPass(Integer percentsToPass) {
        this.percentsToPass = percentsToPass;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TestEntity that = (TestEntity) o;
        return id == that.id && Objects.equals(courseId, that.courseId) && Objects.equals(testContent, that.testContent) && Objects.equals(percentsToPass, that.percentsToPass);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, courseId, testContent, percentsToPass);
    }
}
