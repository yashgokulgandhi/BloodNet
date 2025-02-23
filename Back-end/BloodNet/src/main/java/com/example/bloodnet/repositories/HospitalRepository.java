package com.example.bloodnet.repositories;

import com.example.bloodnet.models.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {
    // Find a hospital by license number
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    Hospital findByUsernameAndPassword(String username, String password);

    Hospital findByUsername(String username);



}