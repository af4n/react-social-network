import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, likesCount: 15, message: "Hi, how are yuo?" },
        { id: 2, likesCount: 21, message: "It's my first post!" },
        { id: 3, likesCount: 9, message: "Hello." }
      ],
      newPostText: ''
    },
    dialogPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Ilona" },
        { id: 3, name: "Leha" },
      ],
      messages: [
        { id: 1, message: "Hi"},
        { id: 2, message: "How is your"},
        { id: 3, message: "Yo!"},
        { id: 4, message: "Goodbye"},
      ],
      newMessageText: ''
    },
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._callSubscriber(this._state);
  }

}





window.store = store;
export default store;
