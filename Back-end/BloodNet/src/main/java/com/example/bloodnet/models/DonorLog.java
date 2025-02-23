//package com.example.bloodnet.models;
//
//
//import jakarta.persistence.*;
//import org.hibernate.annotations.CreationTimestamp;
//
//import java.time.LocalDateTime;
//import java.util.Date;
//
//@Entity
//public class DonorLog {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "donor_log_id")
//    private Long donorLogId;
//
//    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    @JoinColumn(name = "donor_id", nullable = false)
//    private Donor donor;
//
//    @Column(name = "hospital_name")
//    private String hospitalName;
//
//    @Column(name = "donation_date")
//    @CreationTimestamp
//    private LocalDateTime donationDate;
//
//    @Column(name = "quantity_in_ml")
//    private int quantityInMl;
//
//    public DonorLog() {
//    }
//
//    public Long getDonorLogId() {
//        return donorLogId;
//    }
//
//    public void setDonorLogId(Long donorLogId) {
//        this.donorLogId = donorLogId;
//    }
//
//    public Donor getDonor() {
//        return donor;
//    }
//
//    public void setDonor(Donor donor) {
//        this.donor = donor;
//    }
//
//    public String getHospitalName() {
//        return hospitalName;
//    }
//
//    public void setHospitalName(String hospitalName) {
//        this.hospitalName = hospitalName;
//    }
//
//    public LocalDateTime getDonationDate() {
//        return donationDate;
//    }
//
//    public void setDonationDate(LocalDateTime donationDate) {
//        this.donationDate = donationDate;
//    }
//
//    public int getQuantityInMl() {
//        return quantityInMl;
//    }
//
//    public void setQuantityInMl(int quantityInMl) {
//        this.quantityInMl = quantityInMl;
//    }
//}
