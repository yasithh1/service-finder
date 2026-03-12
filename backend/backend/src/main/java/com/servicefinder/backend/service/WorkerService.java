package com.servicefinder.backend.service;

import com.servicefinder.backend.model.User;
import com.servicefinder.backend.model.Worker;
import com.servicefinder.backend.repository.UserRepository;
import com.servicefinder.backend.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository workerRepository;
    @Autowired
    private UserRepository userRepository;

    public Worker updateService(Long id, String fullName, String serviceType,
                                String phone, MultipartFile image) {

        Worker worker = workerRepository.findById(id).orElseThrow();

        worker.setFull_name(fullName);
        worker.setServiceType(serviceType);
        worker.setPhone(phone);

        if (image != null && !image.isEmpty()) {

            String fileName = image.getOriginalFilename();


            try {
                Path path = Paths.get("workers" + fileName);
                Files.write(path, image.getBytes());

                if (!Files.exists(path)) {
                    Files.createDirectories(path);
                }


                worker.setProfileImage(fileName);

            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return workerRepository.save(worker);
    }
    public Worker getWorkerByUserId(Long userId){
        return workerRepository.findByUserId(userId);
    }

    public Worker updateProfile(Long userId, String email, String currentPassword,
                                String newPassword, MultipartFile image) {

        Worker worker = workerRepository.findByUserId(userId);

        User user = worker.getUser();


        // check current password
        if(!user.getPassword().equals(currentPassword)){
            throw new RuntimeException("Current password incorrect");
        }

        // update email + password
        user.setEmail(email);
        user.setPassword(newPassword);

        userRepository.save(user);

        // handle image upload
        if (image != null && !image.isEmpty()) {

            try {

                String fileName = image.getOriginalFilename();

                Path uploadPath = Paths.get("uploads");

                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }

                Path filePath = uploadPath.resolve(fileName);

                Files.write(filePath, image.getBytes());

                worker.setProfileImage(fileName);

            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return workerRepository.save(worker);
    }
}