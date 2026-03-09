package com.servicefinder.backend.service.impl;

import com.servicefinder.backend.dto.OrderRequestDTO;
import com.servicefinder.backend.dto.OrderResponseDTO;
import com.servicefinder.backend.model.Order;
import com.servicefinder.backend.repository.OrderRepository;
import com.servicefinder.backend.service.OrderService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl extends OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public OrderResponseDTO createOrder(OrderRequestDTO dto) {

        Order order = new Order();
        order.setCustomerName(dto.getName());
        order.setService(dto.getService());
        order.setDate(dto.getDate());
        order.setNote(dto.getNote());
        order.setStatus(dto.getStatus());

        Order saved = orderRepository.save(order);

        return new OrderResponseDTO(
                saved.getId(),
                saved.getCustomerName(),
                saved.getService(),
                saved.getDate(),
                saved.getNote(),
                saved.getStatus()
        );
    }

    @Override
    public List<OrderResponseDTO> getAllOrders() {

        return orderRepository.findAll()
                .stream()
                .map(o -> new OrderResponseDTO(
                        o.getId(),
                        o.getCustomerName(),
                        o.getService(),
                        o.getDate(),
                        o.getNote(),
                        o.getStatus()
                ))
                .collect(Collectors.toList());
    }

    @Override
    public OrderResponseDTO updateOrder(Long id, OrderRequestDTO dto) {

        Order order = orderRepository.findById(id).orElseThrow();

        order.setCustomerName(dto.getName());
        order.setService(dto.getService());
        order.setDate(dto.getDate());
        order.setNote(dto.getNote());
        order.setStatus(dto.getStatus());

        Order updated = orderRepository.save(order);

        return new OrderResponseDTO(
                updated.getId(),
                updated.getCustomerName(),
                updated.getService(),
                updated.getDate(),
                updated.getNote(),
                updated.getStatus()
        );
    }

    @Override
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}