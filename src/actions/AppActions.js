import { loginSuccess } from './AuthenticationActions'

export const appInitialize = (dispatch) => {
  return () => {
    if (localStorage.getItem('jwt'))
      dispatch(loginSuccess())
  }
}
