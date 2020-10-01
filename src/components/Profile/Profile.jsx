/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts store={props.store}
               newPostText={props.store.getState().profilePage.newPostText}
               dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;
