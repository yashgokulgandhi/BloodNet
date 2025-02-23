package com.example.bloodnet.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private DynamicEmailService dynamicEmailService;

    @Async
    public void sendEmail(Long hospitalId, String to, String subject, String text) {
        try {
            JavaMailSender mailSender = dynamicEmailService.getJavaMailSender(hospitalId);
            String fromEmail = dynamicEmailService.getHospitalEmail(hospitalId);
            System.out.println(fromEmail);
            System.out.println(to);
            System.out.println(subject);
            System.out.println(text);// Assume this method exists

            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(to);
            message.setSubject(subject);
            message.setText(text);
            mailSender.send(message);
            System.out.println("Email sent successfully to: " + to);
        } catch (Exception e) {
            System.err.println("Failed to send email to: " + to);
            e.printStackTrace();
        }
    }
}
