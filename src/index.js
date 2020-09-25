import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from "./components/Profile/MyPosts/Post/Post";
import DialogItem from "./components/Dialogs/DialogItems/DialogItem";
import Message from "./components/Dialogs/Message/Message";

let postsData = [
  { id: 1, likesCount: "15", message: "Hi, how are yuo?" },
  { id: 2, likesCount: "21", message: "It's my first post!" },
  { id: 3, likesCount: "9", message: "Hello." }
];

let dialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Ilona" },
  { id: 3, name: "Leha" },
];

let messagesData = [
  { id: 1, message: "Hi"},
  { id: 2, message: "How is yuor"},
  { id: 3, message: "Yo!"},
  { id: 4, message: "Goodbye"},
];


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
