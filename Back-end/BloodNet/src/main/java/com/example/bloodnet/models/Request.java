package com.example.bloodnet.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String bloodType; // Storing blood type as a string

    @Column(nullable = false)
    private int requiredBloodAmount;

    @Column(nullable = false)
    private String urgencyLevel;

    private String additionalNote;

    @ManyToOne
    @JoinColumn(name = "hospital_id")
    private Hospital hospital;

    public Request() {
    }

    public Request(Long id, String bloodType, int requiredBloodAmount, String urgencyLevel, String additionalNote, Hospital hospital) {
        this.id = id;
        this.bloodType = bloodType;
        this.requiredBloodAmount = requiredBloodAmount;
        this.urgencyLevel = urgencyLevel;
        this.additionalNote = additionalNote;
        this.hospital = hospital;
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

    public Hospital getHospital() {
        return hospital;
    }

    public void setHospital(Hospital hospital) {
        this.hospital = hospital;
    }
}
