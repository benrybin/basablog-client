package com.example.blog.controllers;

import com.example.blog.entities.Users;
import com.example.blog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="users/add")
    public @ResponseBody String addNewUser(@RequestParam Integer id, @RequestParam String username, @RequestParam String password, @RequestParam String emailAddress){
        Users n = new Users();
        n.setId(id);
        n.setUsername(username);
        n.setPassword(password);
        n.setEmailAddress(emailAddress);
        userRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="users/all")
    public @ResponseBody Iterable<Users> getAllUsers(){
        return userRepository.findAll();
    }

}
