package com.example.bloodnet.services;

import com.example.bloodnet.DTOs.UserRegistrationDTO;
import com.example.bloodnet.models.Role;
import com.example.bloodnet.models.User;
import com.example.bloodnet.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(UserRegistrationDTO userRegistrationDTO, Role role) {
        try {
            // Check if the user already exists by email or username
            Optional<User> existingUserByEmail = userRepository.findByEmail(userRegistrationDTO.getEmail());
            Optional<User> existingUserByUsername = userRepository.findByUsername(userRegistrationDTO.getUsername());

            if (existingUserByEmail.isPresent()) {
                return "User with this email already exists.";
            }

            if (existingUserByUsername.isPresent()) {
                return "User with this username already exists.";
            }

            // If the user does not exist, create a new user
            User user = new User(
                    userRegistrationDTO.getUsername(),
                    userRegistrationDTO.getName(),
                    userRegistrationDTO.getEmail(),
                    userRegistrationDTO.getPassword(),
                    userRegistrationDTO.getPhone(),
                    role
            );

            userRepository.save(user);
            return "User registered successfully.";
        } catch (DataIntegrityViolationException e) {
            // Handle database constraint violations (e.g., duplicate email or username)
            return "Registration failed: A user with the same email or username already exists.";
        } catch (Exception e) {
            // Handle other unexpected errors
            return "Registration failed: An unexpected error occurred. Please try again later.";
        }
    }
}
