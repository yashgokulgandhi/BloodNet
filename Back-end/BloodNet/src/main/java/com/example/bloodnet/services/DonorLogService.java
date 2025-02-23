//package com.example.bloodnet.services;
//
//import com.example.bloodnet.models.DonorLog;
//import com.example.bloodnet.repositories.DonorLogRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class DonorLogService {
//
//    @Autowired
//    private DonorLogRepository donorLogRepository;
//
//    public List<DonorLog> getAllDonorLog() {
//        return donorLogRepository.findAll();
//    }
//
//    public DonorLog getDonorLogById(Long id) {
//        return donorLogRepository.findById(id).orElse(null);
//    }
//
//    public DonorLog saveDonorLog(DonorLog donorLog) {
//        return donorLogRepository.save(donorLog);
//    }
//
////    public void deleteDonorLog(Long id) {
////        donorLogRepository.deleteById(id);
////    }
//}
