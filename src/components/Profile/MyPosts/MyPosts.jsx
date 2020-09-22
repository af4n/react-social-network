/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>New posts
        <textarea name="post" id="newPost" cols="30" rows="10"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are yuo?" like="15" />
        <Post message="It's my first post!" like="20" />

      </div>
    </div>
  );
};

export default MyPosts;

