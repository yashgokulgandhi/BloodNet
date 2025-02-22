package com.example.bloodnet.repositories;


import com.example.bloodnet.models.Role;
import com.example.bloodnet.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Find a user by email
//    User findByEmail(String email);

    // Find a user by role
//    List<User> findByRole(Role role);
}