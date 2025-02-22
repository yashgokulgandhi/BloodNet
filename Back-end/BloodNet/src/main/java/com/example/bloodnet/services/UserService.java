package com.example.bloodnet.services;

import com.example.bloodnet.DTOs.UserRegistrationDTO;
import com.example.bloodnet.models.Role;
import com.example.bloodnet.models.User;
import com.example.bloodnet.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(UserRegistrationDTO userRegistrationDTO, Role role) {
        User user = new User(userRegistrationDTO.getName(),
                userRegistrationDTO.getEmail(),
                userRegistrationDTO.getPassword(),
                userRegistrationDTO.getPhone(),
                role);
//        user.setEmail(userRegistrationDTO.getEmail());
//        user.setPassword(userRegistrationDTO.getPassword()); // In a real application, you should hash the password
//        user.setPhone(userRegistrationDTO.getPhone());
//        user.setRole(role);

        return userRepository.save(user);
    }
}
