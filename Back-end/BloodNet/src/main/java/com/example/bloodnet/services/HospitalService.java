package com.example.bloodnet.services;

import com.example.bloodnet.DTOs.HospitalRegistrationDTO;
import com.example.bloodnet.DTOs.LoginDTO;
import com.example.bloodnet.models.*;
import com.example.bloodnet.repositories.DonorRepository;
import com.example.bloodnet.repositories.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;

@Service
public class HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    DonorRepository donorRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private NotificationService notificationService;

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
        Address address = new Address();
        address.setLatitude(dto.getAddresses().getLatitude());
        address.setLongitude(dto.getAddresses().getLongitude());
        hospital.setAddress(address);
        address.setHospital(hospital);

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

    public void sendRequeststoDonors(Request request) {

         double lat= request.getHospital().getAddress().getLatitude();
         double lng= request.getHospital().getAddress().getLongitude();

        List<Donor> allDonors = donorRepository.findAll();
        double radiusKm = 50.0; // 50 km radius
        List<Donor> donors= allDonors.stream()
                .filter(donor -> calculateDistance(lat, lng, donor.getAddress().getLatitude(), donor.getAddress().getLongitude()) <= radiusKm)
                .collect(Collectors.toList());

        Long hospitalId = request.getHospital().getId();

        String subject = "Urgent Blood Request";
        String text = "Urgent Blood Request! Blood Type:"+request.getBloodType()+" | Required Amount: "+request.getRequiredBloodAmount()+
                " Units | Urgency Level:"+request.getUrgencyLevel()+". If you can donate, please contact immediately!";

        for (Donor donor : donors) {
            emailService.sendEmail(hospitalId, donor.getEmail(), subject, text);
            Notification notification = notificationService.createNotification(request);
            System.out.println(notification);
        }
    }

    private double calculateDistance(double lat1, double lng1, double lat2, double lng2) {
        final int R = 6371; // Earth's radius in kilometers
        double latDistance = Math.toRadians(lat2 - lat1);
        double lngDistance = Math.toRadians(lng2 - lng1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lngDistance / 2) * Math.sin(lngDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in kilometers
    }

}