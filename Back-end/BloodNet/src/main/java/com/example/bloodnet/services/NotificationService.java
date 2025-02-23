package com.example.bloodnet.services;

import com.example.bloodnet.models.Donor;
import com.example.bloodnet.models.Notification;
import com.example.bloodnet.models.Request;
import com.example.bloodnet.repositories.DonorRepository;
import com.example.bloodnet.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private DonorRepository donorRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    public Notification createNotification(Request request) {

        Notification notification = new Notification(request.getBloodType(),
                request.getRequiredBloodAmount(),
                request.getUrgencyLevel(),
                request.getHospital(),false);

        return notificationRepository.save(notification);
    }

    // Mark a notification as read
    public void markAsRead(Long notificationId) {
        Notification notification = notificationRepository.findById(notificationId).orElse(null);
        if (notification != null) {
            notification.setRead(true);
            notificationRepository.save(notification);
        }
    }



}
