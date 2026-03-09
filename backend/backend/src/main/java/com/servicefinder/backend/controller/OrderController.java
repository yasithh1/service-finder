package com.servicefinder.backend.controller;

import com.servicefinder.backend.model.Order;
import com.servicefinder.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin
public class OrderController {

        @Autowired
        private OrderService orderService;

        @PostMapping("/create")
        public Order createOrder(@RequestBody Order order){
            return orderService.createOrder(order);
        }

        @GetMapping("/worker/{workerId}")
        public List<Order> getOrders(@PathVariable Long workerId){
            return orderService.getOrders(workerId);
        }

        @PutMapping("/status/{id}")
        public Order updateStatus(@PathVariable Long id,@RequestParam String status){
            return orderService.updateStatus(id,status);
        }

        @DeleteMapping("/{id}")
        public void deleteOrder(@PathVariable Long id){
            orderService.deleteOrder(id);
        }


}
