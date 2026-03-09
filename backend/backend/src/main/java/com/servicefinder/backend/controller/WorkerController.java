package com.servicefinder.backend.controller;

import com.servicefinder.backend.model.Worker;
import com.servicefinder.backend.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/workers")
@CrossOrigin
public class WorkerController {



        @Autowired
        private WorkerService workerService;

        @PostMapping("/update-service")
        public Worker updateService(@RequestBody Worker worker){
            return workerService.updateService(worker);
        }

        @GetMapping("/{id}")
        public Worker getWorker(@PathVariable Long id){
            return workerService.getWorker(id);
        }


}
