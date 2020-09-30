import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, likesCount: 15, message: "Hi, how are yuo?" },
      { id: 2, likesCount: 21, message: "It's my first post!" },
      { id: 3, likesCount: 9, message: "Hello." }
    ],
    newPostText: 'blya'
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
    newMessageText: 'blya'
  },
};

window.state = state;

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogPage.newMessageText
  };
  state.dialogPage.messages.push(newMessage);
  state.dialogPage.newMessageText = '';
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
  state.dialogPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export let addPost = () => {
  let newPost = {
    id: 4,
    likesCount: 0,
    message: state.profilePage.newPostText
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;