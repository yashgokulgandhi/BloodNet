package com.example.bloodnet.DTOs;

public class HospitalRegistrationDTO {
    private String username;
    private String fullName;
    private String email;
    private String password;
    private String phone;
    private AddressDTO addresses;

    public HospitalRegistrationDTO() {}

    public HospitalRegistrationDTO(String username, String fullName, String email, String password, String phone, AddressDTO addresses) {
        this.username = username;
        this.fullName = fullName;
        this.email = email;
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

    public AddressDTO getAddresses() {
        return addresses;
    }

    public void setAddresses(AddressDTO addresses) {
        this.addresses = addresses;
    }
}
