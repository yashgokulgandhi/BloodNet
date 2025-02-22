package com.example.bloodnet.models;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Getter
@Entity
@Data
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;
    private String fullName;

    @Column(unique = true, nullable = false)
    private String email;
    private String password;
    private String phone;

    @OneToMany(mappedBy = "hospital", cascade = CascadeType.ALL) // Corrected mapping
    private List<Address> address;

    public Hospital() {
    }

    public Hospital(Long id, String username, String fullName, String email, String password, String phone, List<Address> address) {
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setAddress(List<Address> address) {
        this.address = address;
    }
}