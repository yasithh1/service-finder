package com.servicefinder.backend.model;

import jakarta.persistence.*;

@Entity
public class User
{
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    @Column(name="full_name")
    private String full_name;

    @Column(name="email")
    private String email;

    private String password;


    public User(){}


}
