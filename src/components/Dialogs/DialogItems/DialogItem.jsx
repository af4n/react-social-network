import React from "react";
import styles from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user-photo.png"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={styles.dialog}>
      <img src={userPhoto} alt="photo"/>
      <NavLink activeClassName={styles.activeLink} to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;