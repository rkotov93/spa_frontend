import { combineReducers } from 'redux'
import authentication from './authentication'
import posts from './posts'
import postForm from './post_form'

const rootReducer = combineReducers({
  authentication,
  posts,
  postForm
})

export default rootReducer
