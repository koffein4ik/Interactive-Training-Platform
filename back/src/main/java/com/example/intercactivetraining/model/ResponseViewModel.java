package com.example.intercactivetraining.model;

public class ResponseViewModel {
    private boolean isErrorOccurred;
    private String errorMessage;

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public boolean isErrorOccurred() {
        return isErrorOccurred;
    }

    public void setErrorOccurred(boolean errorOccurred) {
        isErrorOccurred = errorOccurred;
    }
}
