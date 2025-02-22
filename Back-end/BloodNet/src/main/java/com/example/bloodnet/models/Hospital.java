package com.example.bloodnet.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@DiscriminatorValue("HOSPITAL")
public class Hospital extends User {
    @Column(nullable = false, unique = true, length = 50)
    private String licenseNumber;

    @Column(nullable = false)
    private Integer capacity;

    @OneToMany(mappedBy = "hospital", cascade = CascadeType.ALL)
    private List<BloodRequest> bloodRequests;

    @OneToMany(mappedBy = "hospital", cascade = CascadeType.ALL)
    private List<Notification> notifications;
}