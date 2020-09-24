import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogsItem name={"Dima"} id={1}/>
        <DialogsItem name={"Ilona"} id={2}/>
        <DialogsItem name={"Leha"} id={3}/>
      </div>
      <div className={styles.messages}>
        <Message message={"Hi"}/>
        <Message message={"How is yuor"}/>
        <Message message={"Yo!"}/>
      </div>
    </div>
  )
}

export default Dialogs;