import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messages = props.messagesData.map(message => <Message message={message.message}/>)
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogs}
      </div>
      <div className={styles.messages}>
        {messages}
      </div>
    </div>
  )
}

export default Dialogs;