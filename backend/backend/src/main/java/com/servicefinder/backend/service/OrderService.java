package com.servicefinder.backend.service;

import com.servicefinder.backend.dto.OrderRequestDTO;
import com.servicefinder.backend.dto.OrderResponseDTO;
import com.servicefinder.backend.model.Order;
import com.servicefinder.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public abstract class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // create order
    public Order createOrder(Order order) {
        order.setStatus("Pending");
        return orderRepository.save(order);
    }

    // get orders for worker
    public List<Order> getOrders(Long workerId) {
        return orderRepository.findByWorkerId(workerId);
    }

    // update order status
    public Order updateStatus(Long id, String status) {
        Order order = orderRepository.findById(id).orElseThrow();
        order.setStatus(status);
        return orderRepository.save(order);
    }

    public abstract OrderResponseDTO createOrder(OrderRequestDTO dto);

    public abstract List<OrderResponseDTO> getAllOrders();

    public abstract OrderResponseDTO updateOrder(Long id, OrderRequestDTO dto);

    // delete order
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}