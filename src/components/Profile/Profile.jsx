/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
import styles from "./Profile.module.css";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
