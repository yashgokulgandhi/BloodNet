package com.example.bloodnet.DTOs;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class RequestDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String bloodType; // Storing blood type as a string


    private int requiredBloodAmount;


    private String urgencyLevel;

    private String additionalNote;

    private String username;

    public RequestDTO() {
    }

    public RequestDTO(Long id, String bloodType, int requiredBloodAmount, String urgencyLevel, String additionalNote, String username) {
        this.id = id;
        this.bloodType = bloodType;
        this.requiredBloodAmount = requiredBloodAmount;
        this.urgencyLevel = urgencyLevel;
        this.additionalNote = additionalNote;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public int getRequiredBloodAmount() {
        return requiredBloodAmount;
    }

    public void setRequiredBloodAmount(int requiredBloodAmount) {
        this.requiredBloodAmount = requiredBloodAmount;
    }

    public String getUrgencyLevel() {
        return urgencyLevel;
    }

    public void setUrgencyLevel(String urgencyLevel) {
        this.urgencyLevel = urgencyLevel;
    }

    public String getAdditionalNote() {
        return additionalNote;
    }

    public void setAdditionalNote(String additionalNote) {
        this.additionalNote = additionalNote;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
