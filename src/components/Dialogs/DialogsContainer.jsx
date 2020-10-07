import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
    newMessageText: state.dialogPage.newMessageText

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);