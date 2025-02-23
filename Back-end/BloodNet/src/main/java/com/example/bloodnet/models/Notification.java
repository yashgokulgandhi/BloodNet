package com.example.bloodnet.models;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "notifications")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String bloodType;

    @Column(nullable = false)
    private int requiredBloodAmount;

    @Column(nullable = false)
    private String urgencyLevel;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @OneToOne
    private Hospital hospital;

    private boolean isRead;

    public Notification() {
    }

    public Notification(Long id, String bloodType, int requiredBloodAmount, String urgencyLevel, LocalDateTime createdAt, Hospital hospital, boolean isRead) {
        this.id = id;
        this.bloodType = bloodType;
        this.requiredBloodAmount = requiredBloodAmount;
        this.urgencyLevel = urgencyLevel;
        this.createdAt = createdAt;
        this.hospital = hospital;
        this.isRead = isRead;
    }

    public Notification(String bloodType, int requiredBloodAmount, String urgencyLevel, Hospital hospital, boolean isRead) {

        this.bloodType = bloodType;
        this.requiredBloodAmount = requiredBloodAmount;
        this.urgencyLevel = urgencyLevel;
        this.createdAt = createdAt;
        this.hospital = hospital;
        this.isRead = isRead;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Hospital getHospital() {
        return hospital;
    }

    public void setHospital(Hospital hospital) {
        this.hospital = hospital;
    }

    public boolean isRead() {
        return isRead;
    }

    public void setRead(boolean read) {
        isRead = read;
    }
}



