import React from "react";
import styles from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={styles.dialog}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB8joIXJgJA6TKhfyz6Af9OE1pjFMAAsq_xA&usqp=CAU" alt="photo"/>
      <NavLink activeClassName={styles.activeLink} to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;