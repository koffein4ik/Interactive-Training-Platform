package com.example.intercactivetraining.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "courses", schema = "interactivetrainingplatform", catalog = "")
public class CourseEntity {
    private int id;
    private String name;
    private Integer authorId;
    private String shortDescription;
    private String fullDescription;
    private Integer price;
    private String imagePath;
    private String courseContent;

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
    @Column(name = "Name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "AuthorId")
    public Integer getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Integer authorId) {
        this.authorId = authorId;
    }

    @Basic
    @Column(name = "ShortDescription")
    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    @Basic
    @Column(name = "FullDescription")
    public String getFullDescription() {
        return fullDescription;
    }

    public void setFullDescription(String fullDescription) {
        this.fullDescription = fullDescription;
    }

    @Basic
    @Column(name = "Price")
    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Basic
    @Column(name = "ImagePath")
    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    @Basic
    @Column(name = "CourseContent")
    public String getCourseContent() {
        return courseContent;
    }

    public void setCourseContent(String courseContent) {
        this.courseContent = courseContent;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CourseEntity that = (CourseEntity) o;
        return id == that.id && Objects.equals(name, that.name) && Objects.equals(authorId, that.authorId) && Objects.equals(shortDescription, that.shortDescription) && Objects.equals(fullDescription, that.fullDescription) && Objects.equals(price, that.price) && Objects.equals(imagePath, that.imagePath) && Objects.equals(courseContent, that.courseContent);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, authorId, shortDescription, fullDescription, price, imagePath, courseContent);
    }
}
