package com.example.bloodnet.DTOs;

import java.util.List;

public class HospitalRegistrationDTO {
    private String username;
    private String fullName;
    private String email;
    private String password;
    private String phone;
    private List<AddressDTO> addresses;

    public HospitalRegistrationDTO() {}

    public HospitalRegistrationDTO(String username, String fullName, String email, String password, String phone, List<AddressDTO> addresses) {
        this.username = username;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.addresses = addresses;
    }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public List<AddressDTO> getAddresses() { return addresses; }
    public void setAddresses(List<AddressDTO> addresses) { this.addresses = addresses; }

    @Override
    public String toString() {
        return "HospitalRegistrationDTO{" +
                "username='" + username + '\'' +
                ", fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", addresses=" + addresses +
                '}';
    }
}
