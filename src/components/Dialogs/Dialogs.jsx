import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage";
import Redirect from "react-router-dom/es/Redirect";


const Dialogs = (props) => {
  let state = props.dialogPage;
  let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
  let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>)

  let onAddMessage = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }
  // if (!props.isAuth) return <Redirect to={"/login"} />
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <NewMessage onAddMessage={onAddMessage}
                    onNewMessageChange={onNewMessageChange}
                    newMessageText={props.newMessageText}/>
      </div>
    </div>
  )
}

export default Dialogs;
