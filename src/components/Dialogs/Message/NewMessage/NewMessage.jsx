import React from "react";

const NewMessage = (props) => {

  return (
    <div>
      <div>
        <h4>New message</h4>
        <div>
          <textarea onChange={props.onMessageChange} name="message" id="newMessage" cols="30"
                    rows="10" value={props.newMessageText}/>
        </div>
        <div>
          <button onClick={props.onAddMessage}>New message</button>
        </div>
      </div>
    </div>

  )
}

export default NewMessage;