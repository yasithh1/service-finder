package com.servicefinder.backend.repository;

import com.servicefinder.backend.model.User;
import com.servicefinder.backend.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkerRepository extends JpaRepository<Worker , Long>
{
    Worker findByEmail(String email);
}
