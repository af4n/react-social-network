import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage";

const Dialogs = (props) => {
  let dialogsElements = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messagesElements = props.dialogPage.messages.map(message => <Message message={message.message}/>)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <NewMessage newMessageText={props.dialogPage.newMessageText}
                    addMessage={props.addMessage}
                    updateNewMessageText={props.updateNewMessageText}/>
      </div>
    </div>
  )
}

export default Dialogs;