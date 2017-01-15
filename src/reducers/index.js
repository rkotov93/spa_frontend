import { combineReducers } from 'redux'
import login from './login'
import posts from './posts'
import postForm from './post_form'

const rootReducer = combineReducers({
  login,
  posts,
  postForm
})

export default rootReducer
