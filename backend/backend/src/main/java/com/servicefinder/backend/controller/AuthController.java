package com.servicefinder.backend.controller;

import com.servicefinder.backend.dto.LoginRequest;
import com.servicefinder.backend.dto.SignupRequest;
import com.servicefinder.backend.model.User;
import com.servicefinder.backend.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request){
        authService.signup(request);
        return "Signup successful";
    }

    @PostMapping("/signin")
    public User login(@RequestBody LoginRequest request){
        return authService.login(request);
    }
}