/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemBody}>
        <div>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
        </div>
        <div>
          { props.message }
        </div>
      </div>
      <div>
        <span>{ props.likesCount } Like!</span>
      </div>
    </div>
  );
};

export default Post;
