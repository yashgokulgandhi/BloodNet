package com.example.bloodnet.controllers;


import com.example.bloodnet.DTOs.LoginDTO;
import com.example.bloodnet.DTOs.LoginResponse;
import com.example.bloodnet.DTOs.UserRegistrationDTO;
import com.example.bloodnet.models.Role;
import com.example.bloodnet.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("login")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/donor")
    public LoginResponse loginDonor(@RequestBody LoginDTO loginDTO) {
        return userService.loginUser(loginDTO, Role.DONOR);
    }

    @PostMapping("/hospital")
    public LoginResponse loginHospital(@RequestBody LoginDTO loginDTO) {
        return userService.loginUser(loginDTO, Role.HOSPITAL);
    }

}
