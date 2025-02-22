package com.example.bloodnet.repositories;

import com.example.bloodnet.models.BloodRequest;
import com.example.bloodnet.models.RequestStatus;
import com.example.bloodnet.models.Urgency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BloodRequestRepository extends JpaRepository<BloodRequest, Long> {
    // Find all blood requests by status
    List<BloodRequest> findByStatus(RequestStatus status);

    // Find all blood requests by urgency level
    List<BloodRequest> findByUrgency(Urgency urgency);

    // Find all blood requests for a specific user
    List<BloodRequest> findByUser_UserId(Long userId);
}