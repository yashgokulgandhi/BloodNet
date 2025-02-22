package com.example.bloodnet.repositories;


import com.example.bloodnet.models.Availability;
import com.example.bloodnet.models.BloodType;
import com.example.bloodnet.models.Donor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonorRepository extends JpaRepository<Donor, Long> {
    // Find a donor by blood type
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

    Donor findByUsernameAndPassword(String username, String password);
}