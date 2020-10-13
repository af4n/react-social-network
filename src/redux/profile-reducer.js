import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  posts: [
    { id: 1, likesCount: 15, message: "Hi, how are yuo?" },
    { id: 2, likesCount: 21, message: "It's my first post!" },
    { id: 3, likesCount: 9, message: "Hello." }
  ],
  newPostText: "",
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 4, likesCount: 0, message: state.newPostText}],
        newPostText: ''
      }
    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile
      }
    }
    case SET_USER_STATUS: {
      return {
        ...state, status: action.status
      }
    }
    default:
      return state;
  }
}

export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    })
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setUserStatus(response.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    })
}

export default profileReducer;