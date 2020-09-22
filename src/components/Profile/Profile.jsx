/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="image"
        />
      </div>
      <div>ava + disc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
