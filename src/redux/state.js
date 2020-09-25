import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, likesCount: 15, message: "Hi, how are yuo?" },
      { id: 2, likesCount: 21, message: "It's my first post!" },
      { id: 3, likesCount: 9, message: "Hello." }
    ]
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Ilona" },
      { id: 3, name: "Leha" },
    ],
    messagesData: [
      { id: 1, message: "Hi"},
      { id: 2, message: "How is yuor"},
      { id: 3, message: "Yo!"},
      { id: 4, message: "Goodbye"},
    ]
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    likesCount: 0,
    message: postMessage
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;