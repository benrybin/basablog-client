package com.example.unzip.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Post {

    public enum tag{HOWTO, JAVA, SPRING, ANGULAR, JAVAFX, TUTORIAL, REACT, MYSQL, CHATTER}
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Integer id;
    private String title;
    private tag tag1;
    private tag tag2;
    private tag tag3;
    private String postText;
    private String imageURL;
    private Integer userId;


    public Post(tag tag1, tag tag2, tag tag3, String postText, String imageURL, Integer userId) {
        this.tag1 = tag1;
        this.tag2 = tag2;
        this.tag3 = tag3;
        this.postText = postText;
        this.imageURL = imageURL;
        this.userId = userId;
    }

    public Post() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public tag getTag1() {
        return tag1;
    }

    public void setTag1(tag tag1) {
        this.tag1 = tag1;
    }

    public tag getTag2() {
        return tag2;
    }

    public void setTag2(tag tag2) {
        this.tag2 = tag2;
    }

    public tag getTag3() {
        return tag3;
    }

    public void setTag3(tag tag3) {
        this.tag3 = tag3;
    }

    public String getPostText() {
        return postText;
    }

    public void setPostText(String postText) {
        this.postText = postText;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
