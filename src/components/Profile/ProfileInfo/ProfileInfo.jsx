/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={styles.ProfileInfoImage}>
        <img
          src="https://previews.123rf.com/images/pariwatlp/pariwatlp1411/pariwatlp141100040/33282388-abstract-social-network-and-technology-background.jpg"
          alt="image"
        />
      </div>
      <div className={styles.discripshinBlock}>ava + disc</div>
    </div>
  );
};

export default ProfileInfo;
