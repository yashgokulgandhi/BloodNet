package com.example.bloodnet.controllers;

import com.example.bloodnet.DTOs.DonorRegistrationDTO;
import com.example.bloodnet.DTOs.HospitalRegistrationDTO;
import com.example.bloodnet.DTOs.LoginDTO;
import com.example.bloodnet.models.Donor;
import com.example.bloodnet.models.Hospital;
import com.example.bloodnet.services.DonorService;
import com.example.bloodnet.services.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class DonorController {

    @Autowired
    private DonorService donorService;

    @Autowired
    private HospitalService hospitalService;

    // Donor Registration
    @PostMapping("registration/donor")
    public ResponseEntity<?> registerDonor(@RequestBody DonorRegistrationDTO donorDTO) {
        try {
            Donor registeredDonor = donorService.registerDonor(donorDTO);
            return new ResponseEntity<>(registeredDonor, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("An error occurred during donor registration.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Donor Login
    @PostMapping("login/donor")
    public ResponseEntity<?> loginDonor(@RequestBody LoginDTO donorDTO) {
        try {
            ResponseEntity<Donor> registeredDonor = donorService.loginDonor(donorDTO);
            return registeredDonor;
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("An error occurred during donor login.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Hospital Registration
    @PostMapping("registration/hospital")
    public ResponseEntity<?> registerHospital(@RequestBody HospitalRegistrationDTO hospitalDTO) {
        try {
            Hospital registeredHospital = hospitalService.registerHospital(hospitalDTO);
            return new ResponseEntity<>(registeredHospital, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("An error occurred during hospital registration.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Hospital Login
    @PostMapping("login/hospital")
    public ResponseEntity<?> loginHospital(@RequestBody LoginDTO loginDTO) {
        try {
            ResponseEntity<Hospital> registeredHospital = hospitalService.loginHospital(loginDTO);
            return registeredHospital;
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("An error occurred during hospital login.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}