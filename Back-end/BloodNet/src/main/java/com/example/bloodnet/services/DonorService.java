package com.example.bloodnet.services;

import com.example.bloodnet.DTOs.DonorRegistrationDTO;
import com.example.bloodnet.DTOs.LoginDTO;
import com.example.bloodnet.models.Address;
import com.example.bloodnet.models.Donor;
import com.example.bloodnet.repositories.AddressRepository;
import com.example.bloodnet.repositories.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DonorService {

    @Autowired
    private DonorRepository donorRepository;
    @Autowired
    private AddressRepository addressRepository;

    public Donor registerDonor(DonorRegistrationDTO dto) {
        if (donorRepository.existsByUsername(dto.getUsername())) {
            throw new IllegalArgumentException("Username '" + dto.getUsername() + "' is already taken.");
        }

        if (donorRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("Email '" + dto.getEmail() + "' is already registered.");
        }

        Donor donor = new Donor();
        donor.setUsername(dto.getUsername());
        donor.setFullName(dto.getFullName());
        donor.setEmail(dto.getEmail());
        donor.setAge(dto.getAge());
        donor.setBloodType(dto.getBloodType());
        donor.setWeight(dto.getWeight());
        donor.setPassword(dto.getPassword());
        donor.setPhone(dto.getPhone());

        Address address = new Address();
        addressRepository.save(address);
        donor.setAddress(address);
        address.setLatitude(dto.getAddresses().getLatitude());
        address.setLongitude(dto.getAddresses().getLongitude());

        donor.setAddress(address);
        address.setUser(donor);
        // Save donor and automatically persist addresses
        return donorRepository.save(donor);
    }

    public ResponseEntity<Donor> loginDonor(LoginDTO donorDTO) {

        Donor donor=donorRepository.findByUsernameAndPassword(donorDTO.getUsername(), donorDTO.getPassword());

        if (donor == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(donor, HttpStatus.OK);
    }


}
