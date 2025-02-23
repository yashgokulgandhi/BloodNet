package com.example.bloodnet.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Donor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;
    private String fullName;

    @Column(nullable = false)
    private String bloodType; // Changed from BloodType to bloodType

    @Column(unique = true, nullable = false)
    private String email;
    private int age;
    private int weight;
    private String password;
    private String phone;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Address> address;

    @OneToMany(mappedBy = "Donor")
    private List<DonorLog> donorLogs;

    public Donor() {
    }

    public Donor(Long id, String username, String fullName, String bloodType, String email, int age, int weight, String password, String phone, List<Address> address) {
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.bloodType = bloodType; // Updated here
        this.email = email;
        this.age = age;
        this.weight = weight;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getBloodType() {
        return bloodType; // Updated here
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType; // Updated here
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

    public List<Address> getAddress() {
        return address;
    }

    public void setAddress(List<Address> address) {
        this.address = address;
    }
}