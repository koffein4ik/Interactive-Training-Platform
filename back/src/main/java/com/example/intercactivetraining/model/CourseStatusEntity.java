package com.example.intercactivetraining.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "coursestatuses", schema = "interactivetrainingplatform", catalog = "")
public class CourseStatusEntity {
    private int id;
    private String statusName;

    @Id
    @Column(name = "Id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "StatusName")
    public String getStatusName() {
        return statusName;
    }

    public void setStatusName(String statusName) {
        this.statusName = statusName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CourseStatusEntity that = (CourseStatusEntity) o;
        return id == that.id && Objects.equals(statusName, that.statusName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, statusName);
    }
}
