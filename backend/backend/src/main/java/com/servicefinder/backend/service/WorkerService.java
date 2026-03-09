package com.servicefinder.backend.service;



import com.servicefinder.backend.model.Worker;
import com.servicefinder.backend.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepository workerRepository;

    public Worker updateService(Worker worker) {
        return workerRepository.save(worker);
    }

    public Worker getWorker(Long id) {
        return workerRepository.findById(id).orElse(null);
    }
}