package com.example.bloodnet.repositories;

import com.example.bloodnet.models.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
    // Find all donations by a specific donor

}
