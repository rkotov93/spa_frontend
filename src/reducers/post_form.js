const initialState = {
  title: {
    value: '',
    touched: false
  },
  body: {
    value: '',
    touched: false
  }
}

const postForm = (state = initialState, action) => {
  switch (action.type) {
  case 'POST_FORM_TITLE_UPDATE':
    return {
      ...state,
      title: action.title
    }
  case 'POST_FORM_BODY_UPDATE':
    return {
      ...state,
      body: action.body
    }
  case 'POST_FORM_REFRESH':
    return initialState
  default:
    return state
  }
}

export default postForm
