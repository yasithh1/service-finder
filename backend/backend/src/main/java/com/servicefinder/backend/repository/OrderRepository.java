package com.servicefinder.backend.repository;

import com.servicefinder.backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order , Long>
{
 List<Order> findByWorkerId(Long workerId);
}
