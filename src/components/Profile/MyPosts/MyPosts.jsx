import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

  let postsElements = [...props.posts].reverse().map(post => <Post message={post.message} key={post.id}
                                                         likesCount={post.likesCount}/>)

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  console.log("render")
  return (
    <div>
      <div>
        <div className={styles.myPostBlock}>
          <h2 className={styles.myPostTitle}>My posts</h2>
          <h4>New post</h4>
          <AddNewPostFormRedux onSubmit={onAddPost}/>
        </div>
        <div className={styles.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  );
});

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"newPostText"} component={Textarea} placeholder={"Enter your post"}
               validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm"
})(AddNewPostForm)

export default MyPosts;

