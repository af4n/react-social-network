/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.state.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };
  return (
    <div>
      <div>
        <div className={styles.myPostBlock}>
          <h2 className={styles.myPostTitle}>My posts</h2>
          <div>
            <h4>New post</h4>
            <div>
              <textarea name="post" ref={newPostElement} id="newPost" cols="30" rows="10"/>
            </div>
            <div>
              <button onClick={ addPost }>Add post</button>
            </div>
          </div>
        </div>
        <div className={styles.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;

