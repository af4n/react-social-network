/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt="image"
        />
      </div>
      <div className={styles.discripshinBlock}>ava + disc</div>
    </div>
  );
};

export default ProfileInfo;
