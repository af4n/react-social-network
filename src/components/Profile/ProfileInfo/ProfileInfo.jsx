import React, {useState} from "react";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user-photo.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false)

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    const promise = props.saveProfile(formData)
    promise.then(() => {
      setEditMode(false)
    })
  }

  return (
    <div>

      <div className={styles.discriptionBlock}>
        <div className={styles.profilePhoto}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={styles.userPhoto} alt="photo"/>
          {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>

        <div className={styles.discriptionInfo}>
          {editMode
              ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
              : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}
        </div>

        <ProfileStatusWithHooks status={props.status}
                       updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div className={styles.profileData}>

      <div><b>Full name</b>: {props.profile.fullName}</div>
      <div><b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}</div>
      {
        props.profile.lookingForAJob &&
        <div><b>My professional skills</b>: {props.profile.lookingForAJobDescription}</div>
      }
      <div><b>About me</b>: {props.profile.aboutMe}</div>
      <div>
        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
      })}
      </div>
      <div>
        {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
      </div>
    </div>
  )
}



export const Contact = ({contactTitle, contactValue}) => {
  return (
    <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
  )
}

export default ProfileInfo;
