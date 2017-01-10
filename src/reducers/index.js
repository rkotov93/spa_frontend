import { combineReducers } from "redux"
import posts from "./posts"
import postForm from "./post_form"
import { routerReducer } from "react-router-redux"

const rootReducer = combineReducers({
  posts,
  postForm,
  routing: routerReducer
})

export default rootReducer
