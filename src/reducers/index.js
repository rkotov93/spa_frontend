import { combineReducers } from "redux"
import posts from "./posts"
import postForm from "./post_form"

const rootReducer = combineReducers({ posts, postForm })

export default rootReducer
