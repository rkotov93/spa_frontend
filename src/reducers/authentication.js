const initialState = {
  isFetching: false,
  isAuthenticated: false,
  email: '',
  errorMessage: ''
}

const authentication = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return login(state, action)
  case 'LOGIN_FORM_EMAIL_CHANGE':
    return emailChange(state, action)
  case 'LOGOUT':
    return logout()
  default:
    return state
  }
}

const login = (state, action) => {
  switch (action.status) {
  case 'success':
    return {
      ...initialState,
      isAuthenticated: true
    }
  case 'failure':
    return {
      ...state,
      isFetching: false,
      isAuthenticated: false,
      errorMessage: action.errorMessage
    }
  default:
    return {
      ...state,
      isFetching: true,
      isAuthenticated: false
    }
  }
}

const logout = () => {
  return initialState
}

const emailChange = (state, action) => {
  return {
    ...state,
    email: action.email
  }
}

export default authentication
