package com.example.intercactivetraining.model;

import java.util.*;

public class UserTestQuestionAnswers {
    private int testId;
    private Map<Integer, String> answers;

    public int getTestId() {
        return testId;
    }

    public void setTestId(int testId) {
        this.testId = testId;
    }

    public Map<Integer, String> getAnswers() {
        return answers;
    }

    public void setAnswers(Map<Integer, String> answers) {
        this.answers = answers;
    }
}
