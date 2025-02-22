package com.example.bloodnet.repositories;

import com.example.bloodnet.models.Notification;
import com.example.bloodnet.models.NotificationType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    // Find all notifications for a specific user
    List<Notification> findByUser_UserId(Long userId);

    // Find all notifications by type (email or SMS)
    List<Notification> findByType(NotificationType type);
}