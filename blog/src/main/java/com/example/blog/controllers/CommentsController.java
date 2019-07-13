package com.example.blog.controllers;

import com.example.blog.entities.Comments;

import com.example.blog.repositories.CommentsRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller
public class CommentsController {
    @Autowired
    private CommentsRepo commentsRepo;

    @GetMapping(path="/add")
    public @ResponseBody
    String addNewComment(@RequestParam String body, @RequestParam Integer userid, @RequestParam Integer postid){
        Comments n = new Comments(body,userid,postid);

        commentsRepo.save(n);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Comments> getAllUsers(){
        return commentsRepo.findAll();
    }
}
