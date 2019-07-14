package com.example.unzip.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String body;
    private Integer userid;
    private Integer postid;

    public Comment(final String body, final Integer userid, final Integer postid) {

        this.body = body;
        this.userid = userid;
        this.postid = postid;
    }

    public Comment() {
    }


    public Long getId() {
        return this.id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getBody() {
        return this.body;
    }

    public void setBody(final String body) {
        this.body = body;
    }

    public Integer getUserid() {
        return this.userid;
    }

    public void setUserid(final Integer userid) {
        this.userid = userid;
    }

    public Integer getPostid() {
        return this.postid;
    }

    public void setPostid(final Integer postid) {
        this.postid = postid;
    }
}
