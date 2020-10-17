import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
// const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, likesCount: 15, message: "Hi, how are yuo?" },
    { id: 2, likesCount: 21, message: "It's my first post!" },
    { id: 3, likesCount: 9, message: "Hello." }
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 4, likesCount: 0, message: action.newPostText}],
      }
    // case DELETE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.filter(p => p.id != action.postId)
    //   }
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
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state, profile: {...state.profile, photos: action.photos}
      }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
//export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}



export default profileReducer;