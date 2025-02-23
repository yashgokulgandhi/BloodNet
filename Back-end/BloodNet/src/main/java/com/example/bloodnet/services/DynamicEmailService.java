package com.example.bloodnet.services;

import com.example.bloodnet.models.Hospital;
import com.example.bloodnet.repositories.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class DynamicEmailService {

    @Autowired
    private HospitalRepository hospitalRepository;

    public JavaMailSender getJavaMailSender(Long hospitalId) {
        Hospital hospital = hospitalRepository.findById(hospitalId)
                .orElseThrow(() -> new RuntimeException("Hospital not found"));

        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com"); // Use the appropriate SMTP host
        mailSender.setPort(587); // Use the appropriate port
        mailSender.setUsername(hospital.getEmail());
        mailSender.setPassword(hospital.getPassword());

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true"); // Enable debug mode for testing

        return mailSender;
    }

    public String getHospitalEmail(Long hospitalId) {
        Hospital hospital = hospitalRepository.findById(hospitalId)
                .orElseThrow(() -> new RuntimeException("Hospital not found"));
        return hospital.getEmail();
    }

}
