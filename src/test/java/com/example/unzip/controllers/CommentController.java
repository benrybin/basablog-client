package com.example.unzip.controllers;

import com.example.unzip.models.Comment;
import com.example.unzip.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;

    @GetMapping(path="/comments/add")
    public @ResponseBody
    String addNewComment(@RequestParam String body, @RequestParam Integer userid, @RequestParam Integer postid){
        Comment n = new Comment(body,userid,postid);

        commentRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/comments/all")
    public @ResponseBody Iterable<Comment> getAllUsers(){
        return commentRepository.findAll();
    }
}
