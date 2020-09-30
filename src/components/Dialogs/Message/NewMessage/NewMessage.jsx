import React from "react";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div>
      <div>
        <h4>New message</h4>
        <div>
          <textarea onChange={onMessageChange} name="message" ref={newMessageElement} id="newMessage" cols="30"
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