/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="image"
        />
      </div>
      <div>ava + disc</div>
      <div>
        my post
        <div>new post</div>
        <div className={styles.posts}>
          <div className={styles.item}>
            <a href="#">post 1</a>
          </div>
          <div className="item">post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
