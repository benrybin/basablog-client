package com.example.blog.repositories;

import com.example.blog.entities.Comments;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CommentsRepo extends CrudRepository <Comments,Long> {

}
