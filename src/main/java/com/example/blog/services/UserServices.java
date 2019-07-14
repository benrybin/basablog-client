package com.example.blog.services;

import com.example.blog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


@Service
public class UserServices {
    @Autowired
    UserRepository repository;



}

