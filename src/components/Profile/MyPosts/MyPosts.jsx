/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>new post
        <textarea name="post" id="newPost" cols="30" rows="10"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;

