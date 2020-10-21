import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'social-network/auth/SET_AUTH_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'social-network/auth/GET_CAPTCHA_SUCCESS';

let initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  captcha: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    case GET_CAPTCHA_SUCCESS:
      return {
        ...state,
        ...action.captcha
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email, isAuth}})
export const getCaptchaSuccess = (captcha) => ({type: GET_CAPTCHA_SUCCESS, captcha })

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me()
  if (response.resultCode === 0) {
    let {id, login, email} = response.data;
    dispatch(setAuthUserData(id, login, email, true))
  }
}



export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe)
  if (response.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptcha())
    }
    let message = response.messages.length > 0 ? response.messages[0] : "Some error"
    dispatch(stopSubmit("login", {_error: message}))
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptcha = () => async (dispatch) => {
  const response = await securityAPI.getCaptcha()
  const captcha = response.data.url
  dispatch(getCaptchaSuccess(captcha))
}

export default authReducer;