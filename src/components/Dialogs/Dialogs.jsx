import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage";

const Dialogs = (props) => {
  let dialogs = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messages = props.state.messages.map(message => <Message message={message.message}/>)
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogs}
      </div>
      <div className={styles.messages}>
        {messages}
        <NewMessage />
      </div>
    </div>
  )
}

export default Dialogs;