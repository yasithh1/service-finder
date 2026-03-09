package com.servicefinder.backend.dto;


public class OrderResponseDTO {

    private Long id;
    private String name;
    private String service;
    private String date;
    private String note;
    private String status;

    public OrderResponseDTO() {
    }

    public OrderResponseDTO(Long id, String name, String service, String date, String note, String status) {
        this.id = id;
        this.name = name;
        this.service = service;
        this.date = date;
        this.note = note;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}