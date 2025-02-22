package com.example.bloodnet.controllers;


import com.example.bloodnet.models.User;
import com.example.bloodnet.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("donors")
    public List<User> getAllDonor() {
        return userService.getAllDonors();
    }

    @GetMapping("hospitals")
    public List<User> getAllHospital() {
        return userService.getAllHospitals();
    }
}
