package com.servicefinder.backend.controller;

import com.servicefinder.backend.model.Worker;
import com.servicefinder.backend.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/workers")
@CrossOrigin
public class WorkerController {



        @Autowired
        private WorkerService workerService;

    @PutMapping("/update-service/{id}")
    public Worker updateService(
            @PathVariable Long id,
            @RequestParam("full_name") String fullName,
            @RequestParam("serviceType") String serviceType,
            @RequestParam("phone") String phone,
            @RequestParam(value="profile_image", required=false) MultipartFile image
    ) {
        return workerService.updateService(id, fullName, serviceType, phone, image);
    }

         @GetMapping("/user/{userId}")
         public Worker getWorkerByUserId(@PathVariable Long userId){
            return workerService.getWorkerByUserId(userId);
         }

    @PutMapping("/update-profile/{userId}")
    public Worker updateProfile(
            @PathVariable Long userId,
            @RequestParam("email") String email,
            @RequestParam("currentPassword") String currentPassword,
            @RequestParam("newPassword") String newPassword,
            @RequestParam(value = "profile_image", required = false) MultipartFile image
    ) {
        return workerService.updateProfile(userId, email, currentPassword, newPassword, image);
    }


}
