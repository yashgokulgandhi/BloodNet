package com.example.bloodnet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
public class BloodNetApplication {

    public static void main(String[] args) {
        SpringApplication.run(BloodNetApplication.class, args);
    }

}
