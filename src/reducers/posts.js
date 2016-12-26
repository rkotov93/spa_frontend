const posts = (state = [], action) => {
  switch (action.type) {
  case "INIT_POSTS":
    return action.posts
  case "ADD_POST":
    return [action.post, ...state]
  case "DESTROY_POST":
    return state.filter(post => post.id !== action.id)
  default:
    return state
  }
}

export default posts
