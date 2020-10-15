const SEND_MESSAGE = "SEND_MESSAGE";

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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageText
      return {
        ...state,
        messages: [...state.messages, {id: 5, message: body}]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;