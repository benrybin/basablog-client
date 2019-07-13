package com.example.blog.services;

import com.example.blog.entities.Comments;
import com.example.blog.repositories.CommentsRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class CommentsService {
    @Autowired
    CommentsRepo commentsRepo;
    public CommentsService(CommentsRepo repo) {
        this.commentsRepo = repo;
    }

    public CommentsService() {
    }

    public Iterable<Comments> all() {
        return commentsRepo.findAll();
    }
    public List<Comments> getCommentsOnPost(Integer postid){
        List<Comments> temp = new ArrayList<>();
        for (Comments comments:commentsRepo.findAll()) {
            if(postid == comments.getPostid()) {
                temp.add(comments);
            }

        }


        return temp;
    }

    public Comments getCommentById(Integer id) {
        for (Comments comments:commentsRepo.findAll()) {
            if(id == comments.getPostid()) {
                return comments;
            }

        }


        return null;
    }

    public Comments post(Comments comments) {
        return commentsRepo.save(comments);
    }
    public Boolean delete(Long id) {
        commentsRepo.deleteById(id);
        return true;
    }

}
