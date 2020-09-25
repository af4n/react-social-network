import React from "react";
import styles from "../../Dialogs.module.css"

const NewMessage = (props) => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value
    console.log(text)
  }
  return (
    <div>
      <div>
        <h4>New message</h4>
        <div>
          <textarea name="post" id="newMessageElement" cols="30" rows="10"/>
        </div>
        <div>
          <button onClick={ () => {console.log("New message")} }>New message</button>
        </div>
      </div>
    </div>

  )
}

export default NewMessage;