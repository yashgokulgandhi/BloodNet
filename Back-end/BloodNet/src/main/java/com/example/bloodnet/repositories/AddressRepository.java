package com.example.bloodnet.repositories;


import com.example.bloodnet.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    // Find all addresses for a specific user
    List<Address> findByUser_UserId(Long userId);
}
