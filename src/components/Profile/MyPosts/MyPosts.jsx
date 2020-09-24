/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={styles.myPostBlock}>
        <h2 className={styles.myPostTitle}>My posts</h2>
        <div>
          <h4>New post</h4>
          <div>
            <textarea name="post" id="newPost" cols="30" rows="10"></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are yuo?" like="15"/>
        <Post message="It's my first post!" like="20"/>
      </div>
    </div>
  )
};

export default MyPosts;

