const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Ilona" },
    { id: 3, name: "Leha" },
  ],
  messages: [
    { id: 1, message: "Hi"},
    { id: 2, message: "How is yuor"},
    { id: 3, message: "Yo!"},
    { id: 4, message: "Goodbye"},
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };
    case SEND_MESSAGE:
      let body = state.newMessageText
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {id: 5, message: body}]
      };
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;