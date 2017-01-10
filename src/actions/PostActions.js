import { refreshForm } from "./PostFormActions"

export const postsListEnter = (dispatch) => {
  return () => {
    fetchPosts()(dispatch)
  }
}

export const postPageEnter = (dispatch) => {
  return (nextState) => {
    fetchPost(nextState.params.id)(dispatch)
  }
}

const requestPosts = () => {
  return {
    type: "FETCH_POSTS"
  }
}

const receivePosts = (posts) => {
  return {
    type: "FETCH_POSTS",
    status: "success",
    posts
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(requestPosts())
    return fetch(`${process.env.API_HOST}/api/v1/posts.json`).then((response) => {
      return response.json()
    }).then((posts) => {
      dispatch(receivePosts(posts || []))
    })
  }
}

const fetchPostRequest = () => {
  return {
    type: "FETCH_POST"
  }
}

const fetchPostSuccess = (post) => {
  return {
    type: "FETCH_POST",
    status: "success",
    post
  }
}

export const fetchPost = (id) => {
  return (dispatch) => {
    dispatch(fetchPostRequest())
    return fetch(`${process.env.API_HOST}/api/v1/posts/${id}.json`).then((response) => {
      return response.json()
    }).then((post) => {
      dispatch(fetchPostSuccess(post))
    })
  }
}

const addPostRequest = () => {
  return {
    type: "ADD_POST"
  }
}

const addPostSuccess = (post) => {
  return {
    type: "ADD_POST",
    status: "success",
    post
  }
}

const addPostFailure = (message) => {
  return {
    type: "ADD_POST",
    status: "failure",
    message
  }
}

export const addPost = (post) => {
  return (dispatch) => {
    dispatch(addPostRequest())
    fetch(`${process.env.API_HOST}/api/v1/posts.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: post })
    }).then(response => {
      return response.json()
    }).then(post => {
      if (post.errors)
        dispatch(addPostFailure(post.errors))
      else {
        dispatch(addPostSuccess(post))
        dispatch(refreshForm())
      }
    })
  }
}

const destroyPostRequest = () => {
  return {
    type: "DESTROY_POST"
  }
}

const destroyPostSuccess = (id) => {
  return {
    type: "DESTROY_POST",
    status: "success",
    id
  }
}

const destroyPostFailure = (message) => {
  return {
    type: "DESTROY_POST",
    status: "failure",
    message
  }
}

export const requestPostDestroy = (id) => {
  return (dispatch) => {
    dispatch(destroyPostRequest())
    fetch(`${process.env.API_HOST}/api/v1/posts/${id}.json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(response => {
      return response.json()
    }).then(post => {
      if (post.errors)
        dispatch(destroyPostFailure(post.errors))
      else
        dispatch(destroyPostSuccess(post.id))
    })
  }
}
