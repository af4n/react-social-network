/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  return (
    <div>
      <div className={styles.myPostBlock}>
        <h2 className={styles.myPostTitle}>My posts</h2>
        <div>
          <h4>New post</h4>
          <div>
            <textarea name="post" id="newPost" cols="30" rows="10"/>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )
};

export default MyPosts;

