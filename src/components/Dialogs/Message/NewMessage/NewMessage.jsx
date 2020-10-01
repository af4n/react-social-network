import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogs-reducer";

const NewMessage = (props) => {

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    let action = updateNewMessageTextActionCreator(text)
    props.dispatch(action);
  }

  return (
    <div>
      <div>
        <h4>New message</h4>
        <div>
          <textarea onChange={onMessageChange} name="message" id="newMessage" cols="30"
                    rows="10" value={props.newMessageText}/>
        </div>
        <div>
          <button onClick={addMessage}>New message</button>
        </div>
      </div>
    </div>

  )
}

export default NewMessage;