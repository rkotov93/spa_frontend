const initialState = {
  items: [],
  current: null,
  isFetching: false
}

const posts = (state = initialState, action) => {
  switch (action.type) {
  case "FETCH_POSTS":
    return fetchPosts(state, action)
  case "FETCH_POST":
    return fetchPost(state, action)
  case "ADD_POST":
    return addPost(state, action)
  case "DESTROY_POST":
    return destroyPost(state, action)
  default:
    return state
  }
}

const fetchPosts = (state, action) => {
  switch (action.status) {
  case "success":
    return {
      items: action.posts,
      isFetching: false
    }
  default:
    return {
      ...state,
      items: [],
      isFetching: true
    }
  }
}

const fetchPost = (state, action) => {
  switch (action.status) {
  case "success":
    return {
      current: action.post,
      isFetching: false
    }
  default:
    return {
      ...state,
      isFetching: true
    }
  }
}

const addPost = (state, action) => {
  switch (action.status) {
  case "success":
    return {
      items: [action.post, ...state.items],
      isFetching: false
    }
  case "failure":
    return {
      ...state,
      message: action.message,
      isFetching: false
    }
  default:
    return {
      ...state,
      isFetching: true
    }
  }
}

const destroyPost = (state, action) => {
  switch (action.status) {
  case "success":
    return {
      items: state.items.filter(post => post.id !== action.id),
      isFetching: false
    }
  case "failure":
    return {
      ...state,
      message: action.message,
      isFetching: false
    }
  default:
    return {
      ...state,
      isFetching: true
    }
  }
}

export default posts
