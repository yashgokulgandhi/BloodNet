package com.example.bloodnet.DTOs;

import lombok.Data;

@Data
public class LoginResponse {
    private Long userId;
    private String username;
    private String fullName;
    private String email;
    private String message;
    private boolean success;

    public LoginResponse(Long userId, String username, String fullName, String email, String message, boolean success) {
        this.userId = userId;
        this.username = username;
        this.fullName = fullName;
        this.email = email;
        this.message = message;
        this.success = success;
    }

    public LoginResponse() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
}
