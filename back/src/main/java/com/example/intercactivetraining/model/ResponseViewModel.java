package com.example.intercactivetraining.model;

import lombok.Data;

@Data
public class ResponseViewModel {
    private boolean isErrorOccurred;
    private String errorMessage;
}
