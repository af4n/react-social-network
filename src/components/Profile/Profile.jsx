/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   isOwner={props.isOwner}
                   savePhoto={props.savePhoto}
                   saveProfile={props.saveProfile}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
