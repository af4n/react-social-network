import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount}/>)

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div>
        <div className={styles.myPostBlock}>
          <h2 className={styles.myPostTitle}>My posts</h2>
          <div>
            <h4>New post</h4>
            <div>
              <textarea onChange={onPostChange} name="post" id="newPost" cols="30" rows="10"
                        value={props.newPostText}/>
            </div>
            <div>
              <button onClick={onAddPost}>Add post</button>
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

