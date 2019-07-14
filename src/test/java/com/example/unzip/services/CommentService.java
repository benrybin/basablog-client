package com.example.unzip.services;

import com.example.unzip.models.Comment;
import com.example.unzip.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class CommentService {
    @Autowired
    CommentRepository commentRepository;
    public CommentService(CommentRepository repo) {
        this.commentRepository = repo;
    }

    public CommentService() {
    }

    public Iterable<Comment> all() {
        return commentRepository.findAll();
    }
    public List<Comment> getCommentsOnPost(Integer postid){
        List<Comment> temp = new ArrayList<>();
        for (Comment comments: commentRepository.findAll()) {
            if(postid == comments.getPostid()) {
                temp.add(comments);
            }

        }


        return temp;
    }

    public Comment getCommentById(Integer id) {
        for (Comment comments: commentRepository.findAll()) {
            if(id == comments.getPostid()) {
                return comments;
            }

        }


        return null;
    }

    public Comment post(Comment comments) {
        return commentRepository.save(comments);
    }
    public Boolean delete(Long id) {
        commentRepository.deleteById(id);
        return true;
    }

}
