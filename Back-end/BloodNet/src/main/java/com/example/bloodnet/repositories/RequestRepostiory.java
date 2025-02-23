package com.example.bloodnet.repositories;

import com.example.bloodnet.models.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepostiory extends JpaRepository<Request,Long> {


}
