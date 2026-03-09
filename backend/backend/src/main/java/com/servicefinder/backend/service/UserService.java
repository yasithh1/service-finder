package com.servicefinder.backend.service;

import com.servicefinder.backend.model.User;
import com.servicefinder.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user)
    {
        return userRepository.save(user);
    }

    public User login (String email)
    {
        return userRepository.findByEmail(email);
    }
}
