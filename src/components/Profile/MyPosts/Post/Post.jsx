/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      { props.message }
      <div>
        <span>{ props.like } Like!</span>
      </div>
    </div>
  );
};

export default Post;