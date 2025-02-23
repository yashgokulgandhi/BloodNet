package com.example.bloodnet.DTOs;

import com.example.bloodnet.models.BloodType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import java.util.List;

public class DonorRegistrationDTO {
    private String username;
    private String fullName;
    private String email;
    private int age;

     // Add this annotation to fix the issue
    private String bloodType;

    private int weight;
    private String password;
    private String phone;
    private List<AddressDTO> addresses;

    public DonorRegistrationDTO() {
    }

    public DonorRegistrationDTO(String username, String fullName, String email, int age, String bloodType, int weight, String password, String phone, List<AddressDTO> addresses) {
        this.username = username;
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.bloodType = bloodType;
        this.weight = weight;
        this.password = password;
        this.phone = phone;
        this.addresses = addresses;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<AddressDTO> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<AddressDTO> addresses) {
        this.addresses = addresses;
    }
}
