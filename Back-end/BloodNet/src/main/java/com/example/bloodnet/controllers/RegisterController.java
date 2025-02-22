package com.example.bloodnet.controllers;

import com.example.bloodnet.DTOs.UserRegistrationDTO;
import com.example.bloodnet.models.Role;
import com.example.bloodnet.models.User;
import com.example.bloodnet.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/registration")
public class RegisterController {

    @Autowired
    private UserService userService;

    @PostMapping("/donor")
    public ResponseEntity<String> registerDonor(@RequestBody UserRegistrationDTO userRegistrationDTO) {
        String response = userService.registerUser(userRegistrationDTO, Role.DONOR);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/hospital")
    public ResponseEntity<String> registerHospital(@RequestBody UserRegistrationDTO userRegistrationDTO) {
        String response = userService.registerUser(userRegistrationDTO, Role.HOSPITAL);
        return ResponseEntity.ok(response);
    }
}
