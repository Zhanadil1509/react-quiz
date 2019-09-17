import axios from "axios";
import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export const auth = (email, password, isLogin) => async (dispatch) => {
  const authData = {
    email,
    password,
    returnSecureToken: true
  }

  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-d7aimWg-xKT17ZiTioX2NHltpmn_OM4'

  if(isLogin) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-d7aimWg-xKT17ZiTioX2NHltpmn_OM4'
  }

  const response = await axios.post(url, authData)

  const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)

  localStorage.setItem('token', response.data.idToken)
  localStorage.setItem('userId', response.data.localId)
  localStorage.setItem('expirationDate', expirationDate)

  dispatch(authSuccess(response.data.idToken))
  dispatch(autoLogout(response.data.expiresIn))
}

export const autoLogout = (time) => (dispatch) => {
  setTimeout(() => {
    dispatch(logout())
  }, time * 1000)
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationDate')
  return {
    type: AUTH_LOGOUT
  }
}

export const autoLogin = () => (dispatch) => {
    const token = localStorage.getItem('token')
    const expirationDate = new Date(localStorage.getItem('expirationDate'))
    !token
      ? dispatch(logout())
      : expirationDate <= new Date()
      ? dispatch(logout())
      : dispatch(authSuccess(token))
        dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
}

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    token
  }
}