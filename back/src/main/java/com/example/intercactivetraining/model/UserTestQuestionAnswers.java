package com.example.intercactivetraining.model;

import lombok.Data;

import java.util.*;

@Data
public class UserTestQuestionAnswers {
    private int testId;
    private Map<Integer, String> answers;
}
