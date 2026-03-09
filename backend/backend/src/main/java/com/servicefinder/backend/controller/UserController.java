package com.servicefinder.backend.controller;

import com.servicefinder.backend.model.User;
import com.servicefinder.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user)
    {
        return userService.register(user);
    }


}
