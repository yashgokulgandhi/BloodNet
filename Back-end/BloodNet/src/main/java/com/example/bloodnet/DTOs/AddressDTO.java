package com.example.bloodnet.DTOs;


public class AddressDTO {
    private Double latitude;
    private Double longitude;

    public AddressDTO() {}

    public AddressDTO(Double latitude, Double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    @Override
    public String toString() {
        return "AddressDTO{" +
                "latitude=" + latitude +
                ", longitude=" + longitude +
                '}';
    }
}
