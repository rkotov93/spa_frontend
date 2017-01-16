import { browserHistory } from 'react-router'

export const loginPageEnter = () => {
  return (nextState, replace) => {
    if (localStorage.getItem('jwt'))
      replace('/')
  }
}

const loginRequest = () => {
  return {
    type: 'LOGIN'
  }
}

export const loginSuccess = () => {
  return {
    type: 'LOGIN',
    status: 'success'
  }
}

const loginFailure = (errorMessage) => {
  return {
    type: 'LOGIN',
    status: 'failure',
    errorMessage
  }
}

export const login = (creds) => {
  return (dispatch) => {
    dispatch(loginRequest())
    fetch(`${process.env.API_HOST}/api/v1/user_token.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ auth: creds })
    }).then(response => {
      return response.json().then(json => {
        return { json, response }
      })
    }).then(({ json, response }) => {
      if (response.ok) {
        localStorage.setItem('jwt', json.jwt)
        dispatch(loginSuccess())
        browserHistory.push('/')
      }
      else
        dispatch(loginFailure('Not authorized'))
    }).catch(() => dispatch(loginFailure('Not authorized')))
  }
}

export const logout = () => {
  localStorage.removeItem('jwt')
  return {
    type: 'LOGOUT'
  }
}

export const handleEmailInputChange = (value) => {
  return {
    type: 'LOGIN_FORM_EMAIL_CHANGE',
    value
  }
}
