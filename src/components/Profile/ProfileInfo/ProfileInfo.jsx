import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={styles.discriptionBlock}>
        <div>
          <img src={props.profile.photos.large} alt="photo"/>
        </div>
        <div className={styles.discriptionInfo}>
          <div><b>{props.profile.fullName}</b></div>
          <div><b>About me:</b> {props.profile.aboutMe}</div>
          <div className={styles.contscts}>
            <span><b>Contacts:</b></span>
            <div><a href="https://www.facebook.com">{props.profile.contacts.facebook}</a></div>
            <div><a href="https://www.github.com">{props.profile.contacts.github}</a></div>
            <div><a href="https://www.vk.com">{props.profile.contacts.vk}</a></div>
            <div><a href="https://www.twitter.com">{props.profile.contacts.twitter}</a></div>
            <div><a href="https://www.instagram.com">{props.profile.contacts.instagram}</a></div>
          </div>

        </div>
        <ProfileStatus status={props.status}
                       updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
