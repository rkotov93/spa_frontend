const initialState = {
  isFetching: false,
  isAuthenticated: false,
  email: '',
  errorMessage: ''
}

const login = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return authenticate(state, action)
  case 'LOGIN_FORM_EMAIL_CHANGE':
    return emailChange(state, action)
  default:
    return state
  }
}

const authenticate = (state, action) => {
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

const emailChange = (state, action) => {
  return {
    ...state,
    email: action.email
  }
}

export default login
