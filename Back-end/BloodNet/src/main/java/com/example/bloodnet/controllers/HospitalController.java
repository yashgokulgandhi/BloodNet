package com.example.bloodnet.controllers;


import com.example.bloodnet.DTOs.RequestDTO;
import com.example.bloodnet.models.Donor;
import com.example.bloodnet.models.Hospital;
import com.example.bloodnet.models.Request;
import com.example.bloodnet.repositories.HospitalRepository;
import com.example.bloodnet.repositories.RequestRepostiory;
import com.example.bloodnet.services.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hospital")
@CrossOrigin("*")
public class HospitalController {

    @Autowired
    RequestRepostiory requestRepostiory;
    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    HospitalService hospitalService;

    @PostMapping("/request")
    List<Donor> postRequest(@RequestBody RequestDTO requestdto) {

        Request request = new Request();
        request.setBloodType(requestdto.getBloodType());
        request.setAdditionalNote(requestdto.getAdditionalNote());
        request.setUrgencyLevel(requestdto.getUrgencyLevel());
        request.setRequiredBloodAmount(requestdto.getRequiredBloodAmount());
        Hospital hospital = hospitalRepository.findByUsername(requestdto.getUsername());
        request.setHospital(hospital);


        Request request1=requestRepostiory.save(request);

        if(request1==null){
            return null;
        }

       return hospitalService.sendRequeststoDonors(request);


    }
}
