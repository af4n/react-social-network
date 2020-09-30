import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addMessage={addMessage}
           addPost={addPost}
           updateNewMessageText={updateNewMessageText}
           updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
