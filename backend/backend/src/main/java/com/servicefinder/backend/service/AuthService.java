package com.servicefinder.backend.service;

import com.servicefinder.backend.dto.LoginRequest;
import com.servicefinder.backend.dto.SignupRequest;
import com.servicefinder.backend.model.User;
import com.servicefinder.backend.model.Worker;
import com.servicefinder.backend.repository.UserRepository;
import com.servicefinder.backend.repository.WorkerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WorkerRepository workerRepository;

    public void signup(SignupRequest request) {

        // Create User
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        userRepository.save(user);

        // Create Worker
        Worker worker = new Worker();
        worker.setFull_name(request.getFullName());
        System.out.println(request.getFullName()); //debug line
        worker.setServiceType(request.getServiceType());
        worker.setPhone(request.getPhoneNumber());
        worker.setLocation(request.getLocation());
        worker.setUser(user);

        // Save Worker
        workerRepository.save(worker);
    }

    public User login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail());

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}