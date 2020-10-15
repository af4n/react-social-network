import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";
import Redirect from "react-router-dom/es/Redirect";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from "../Common/FormsControls/FormsControls";


const Dialogs = (props) => {
  let state = props.dialogPage;
  let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
  let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>)

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  }

  // if (!props.isAuth) return <Redirect to={"/login"} />
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <div>
          <h4>New message</h4>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"newMessageText"} component={Textarea} placeholder={"Enter your message"}
               validate={[required, maxLength50]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;


