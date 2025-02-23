//package com.example.bloodnet.controllers;
//
//import com.example.bloodnet.models.DonorLog;
//import com.example.bloodnet.services.DonorLogService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/donor")
//public class DonorController {
//
//    @Autowired
//    private DonorLogService donorLogService;
//
//    @GetMapping
//    public List<DonorLog> getAllDonorLogs() {
//        return donorLogService.getAllDonorLog();
//    }
//
////    @GetMapping("/{id}")
////    public DonorLog getDonationById(@PathVariable Long id) {
////        return donorLogService.getDonorLogById(id);
////    }
//
//    @PostMapping
//    public DonorLog createDonorLog(@RequestBody DonorLog donorLog) {
//        return donorLogService.saveDonorLog(donorLog);
//    }
//}
