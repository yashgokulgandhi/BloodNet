package com.example.bloodnet.services;

import com.example.bloodnet.DTOs.HospitalRegistrationDTO;
import com.example.bloodnet.DTOs.LoginDTO;
import com.example.bloodnet.models.Address;
import com.example.bloodnet.models.Hospital;
import com.example.bloodnet.repositories.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    public Hospital registerHospital(HospitalRegistrationDTO dto) {
        if (hospitalRepository.existsByUsername(dto.getUsername())) {
            throw new IllegalArgumentException("Username '" + dto.getUsername() + "' is already taken.");
        }

        if (hospitalRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("Email '" + dto.getEmail() + "' is already registered.");
        }

        Hospital hospital = new Hospital();
        hospital.setUsername(dto.getUsername());
        hospital.setFullName(dto.getFullName());
        hospital.setEmail(dto.getEmail());
        hospital.setPassword(dto.getPassword());
        hospital.setPhone(dto.getPhone());

        // Map AddressDTOs to Address entities
        List<Address> addresses = dto.getAddresses().stream()
                .map(addressDTO -> {
                    Address address = new Address();
                    address.setLatitude(addressDTO.getLatitude());
                    address.setLongitude(addressDTO.getLongitude());
                    address.setHospital(hospital); // Link address to hospital
                    return address;
                })
                .collect(Collectors.toList());

        hospital.setAddress(addresses);

        // Save hospital and automatically persist addresses
        return hospitalRepository.save(hospital);
    }

    public ResponseEntity<Hospital> loginHospital(LoginDTO loginDTO) {
        Hospital hospital = hospitalRepository.findByUsernameAndPassword(loginDTO.getUsername(), loginDTO.getPassword());
        if (hospital == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(hospital, HttpStatus.OK);
    }
}