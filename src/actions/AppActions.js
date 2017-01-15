import { loginSuccess } from './LoginActions'

export const appInitialize = (dispatch) => {
  return () => {
    if (localStorage.getItem('jwt'))
      dispatch(loginSuccess())
  }
}
