package com.example.bloodnet.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "donations")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long donationId;

    @ManyToOne
    @JoinColumn(name = "donor_id", nullable = false)
    private Donor donor;

    @ManyToOne
    @JoinColumn(name = "request_id", nullable = false)
    private BloodRequest bloodRequest;

    @Column(nullable = false)
    private Integer quantity;
}