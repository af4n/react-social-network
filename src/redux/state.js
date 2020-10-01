const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
        { id: 2, message: "How is yuor"},
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

  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogPage.newMessageText
    };
    this._state.dialogPage.messages.push(newMessage);
    this._state.dialogPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        likesCount: 0,
        message: this._state.profilePage.newPostText
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

window.store = store;
export default store;
