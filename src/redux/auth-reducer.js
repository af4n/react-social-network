import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_USER_DATA';


let initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false

}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email, isAuth}})

export const getAuthUserData = () => (dispatch) => {
  authAPI.me()
    .then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true))
      }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
      }
    })
}

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}

export default authReducer;