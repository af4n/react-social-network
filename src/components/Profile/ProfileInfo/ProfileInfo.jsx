import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={styles.ProfileInfoImage}>
        <img
          src="https://previews.123rf.com/images/pariwatlp/pariwatlp1411/pariwatlp141100040/33282388-abstract-social-network-and-technology-background.jpg"
          alt="image"
        />
      </div>
      <div className={styles.discriptionBlock}>
        <div>
          <img src={props.profile.photos.large} alt="photo"/>
        </div>
        <div className={styles.discriptionInfo}>
          <div>{props.profile.fullName}</div>
          <div>{props.profile.aboutMe}</div>
          <div>
            <span>Contacts:</span>
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.contacts.website}</div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.instagram}</div>
          </div>
          <div>{props.profile.lookingForAJob}</div>
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
