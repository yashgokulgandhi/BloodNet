package com.example.bloodnet.controllers;

import com.example.bloodnet.models.Donation;
import com.example.bloodnet.models.Donor;
import com.example.bloodnet.models.Notification;
import com.example.bloodnet.repositories.DonationRepository;
import com.example.bloodnet.repositories.DonorRepository;
import com.example.bloodnet.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RequestController {

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private DonorRepository donorRepository;

    @Autowired
    private DonationRepository donationRepository;

    @GetMapping("/notifications")
    public List<Notification> acceptNotification(){

        return notificationRepository.findAll();

    }

   @PostMapping("/notification/accept/{username}/{id}")  //id is hospital id
    public Notification acceptNotification(@PathVariable Long id, @PathVariable String username){

        Notification notification = notificationRepository.findById(id).orElse(null);


       Donor donor=donorRepository.findByUsername(username);
        if (notification!=null) {

            notificationRepository.delete(notification);
            Donation donation=new Donation(notification.getBloodType(),notification.getRequiredBloodAmount(),notification.getUrgencyLevel(),notification.getHospital(),donor);
            donationRepository.save(donation);
        }

        return notification;

    }

}
