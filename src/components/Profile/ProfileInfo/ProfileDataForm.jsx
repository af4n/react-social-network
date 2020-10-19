import React from "react";
import {createField, Input} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import styles from "../../Common/FormsControls/FormsControls.module.css"

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><button>Save</button></div>
      {
        props.error &&
        <div className={styles.formSummaryError}>{props.error}</div>
      }
      <div><b>Full name</b>: {createField("text", "fullName", "Full name", [], Input)}</div>
      <div><b>Looking for a job</b>: {createField("checkbox", "lookingForAJob", "", [], Input)}</div>
      <div><b>My professional skills</b>: {createField("text", "lookingForAJobDescription", "My professional skills", [], Input)}</div>
      <div><b>About me</b>: {createField("text", "aboutMe", "About me", [], Input)}</div>
      <div>
        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
        return (
          <div key={key} className={styles.contacts}>
            <b>{key}: {createField("text", "contacts." + key, key, [], Input)}</b>
          </div>
        )
      })}
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({form:"editProfile"})(ProfileDataForm)

export default ProfileDataFormReduxForm
