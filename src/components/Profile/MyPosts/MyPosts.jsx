import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div>
      <div>
        <div className={styles.myPostBlock}>
          <h2 className={styles.myPostTitle}>My posts</h2>
          <div>
            <h4>New post</h4>
            <div>
              <textarea onChange={onPostChange} name="post" ref={newPostElement} id="newPost" cols="30" rows="10"
                        value={props.newPostText}/>
            </div>
            <div>
              <button onClick={addPost}>Add post</button>
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

