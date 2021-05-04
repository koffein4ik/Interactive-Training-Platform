package com.example.intercactivetraining.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "testquestionanswer", schema = "interactivetrainingplatform", catalog = "")
public class TestQuestionAnswerEntity {
    private Integer id;
    private Integer testId;
    private Integer questionNumber;
    private String questionAnswer;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "TestId")
    public Integer getTestId() {
        return testId;
    }

    public void setTestId(Integer testId) {
        this.testId = testId;
    }

    @Basic
    @Column(name = "QuestionNumber")
    public Integer getQuestionNumber() {
        return questionNumber;
    }

    public void setQuestionNumber(Integer questionNumber) {
        this.questionNumber = questionNumber;
    }

    @Basic
    @Column(name = "QuestionAnswer")
    public String getQuestionAnswer() {
        return questionAnswer;
    }

    public void setQuestionAnswer(String questionAnswer) {
        this.questionAnswer = questionAnswer;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TestQuestionAnswerEntity that = (TestQuestionAnswerEntity) o;
        return id == that.id && Objects.equals(testId, that.testId) && Objects.equals(questionNumber, that.questionNumber) && Objects.equals(questionAnswer, that.questionAnswer);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, testId, questionNumber, questionAnswer);
    }
}
