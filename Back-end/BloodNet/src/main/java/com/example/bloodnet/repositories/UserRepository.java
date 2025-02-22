package com.example.bloodnet.repositories;


import com.example.bloodnet.models.Role;
import com.example.bloodnet.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {


    List<User> findByRole(Role role);
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
}