import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage";

const Dialogs = (props) => {

  let state = props.dialogPage;
  let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messagesElements = state.messages.map(message => <Message message={message.message}/>)

  let onAddMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);

  }
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <NewMessage onAddMessage={onAddMessage}
                    onMessageChange={onMessageChange}
                    newMessageText={props.newMessageText}/>
      </div>
    </div>
  )
}

export default Dialogs;