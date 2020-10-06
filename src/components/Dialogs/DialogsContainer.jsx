import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogPage;

  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <Dialogs updateNewMessageText={onMessageChange}
             sendMessage={onAddMessage}
             dialogPage={state}
             newMessageText={state.newMessageText}/>
  )
}

export default DialogsContainer;