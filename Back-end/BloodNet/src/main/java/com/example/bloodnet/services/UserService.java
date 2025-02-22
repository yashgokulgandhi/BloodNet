package com.example.bloodnet.services;

import com.example.bloodnet.DTOs.LoginDTO;
import com.example.bloodnet.DTOs.LoginResponse;
import com.example.bloodnet.DTOs.UserRegistrationDTO;
import com.example.bloodnet.models.Role;
import com.example.bloodnet.models.User;
import com.example.bloodnet.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
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

            // If the user does not exist, create a new user with the specified role
            User user = new User(
                    userRegistrationDTO.getUsername(),
                    userRegistrationDTO.getName(),
                    userRegistrationDTO.getEmail(),
                    userRegistrationDTO.getPassword(),
                    userRegistrationDTO.getPhone(),
                    role // Correctly set the role here
            );

            userRepository.save(user);
            return "User registered successfully as " + role.name() + ".";
        } catch (DataIntegrityViolationException e) {
            return "Registration failed: A user with the same email or username already exists.";
        } catch (Exception e) {
            return "Registration failed: An unexpected error occurred. Please try again later.";
        }
    }

    public List<User> getAllDonors() {
        return userRepository.findByRole(Role.DONOR);
    }

    public List<User> getAllHospitals() {
        return userRepository.findByRole(Role.HOSPITAL);
    }

    public LoginResponse loginUser(LoginDTO loginDTO, Role role) {
        // Find the user by username
        Optional<User> userOptional = userRepository.findByUsername(loginDTO.getUsername());

        if (userOptional.isEmpty()) {
            // User not found
            return new LoginResponse(null, null, null, null, "User not found", false);
        }

        User user = userOptional.get();

        // Check if the role matches
        if (!user.getRole().equals(role)) {
            return new LoginResponse(null, null, null, null, "Invalid role", false);
        }

        // Check if the password matches
        if (!user.getPassword().equals(loginDTO.getPassword())) {
            return new LoginResponse(null, null, null, null, "Invalid password", false);
        }

        // Login successful
        return new LoginResponse(
                user.getUserId(),
                user.getUsername(),
                user.getName(),
                user.getEmail(),
                "Login successful",
                true
        );
    }
}
