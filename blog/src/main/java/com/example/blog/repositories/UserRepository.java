package com.example.blog.repositories;

import com.example.blog.entities.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Users, Integer>{
<<<<<<< HEAD:blog/src/main/java/com/example/blog/repositories/UserRepository.java
=======
    List<Users> username(String username);

>>>>>>> parent of deb3534... fixed new table issue:blog/src/main/java/com/example/blog/UserRepository.java
}
