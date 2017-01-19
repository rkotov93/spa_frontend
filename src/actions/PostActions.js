import headers from './headers'

import { browserHistory } from 'react-router'
import { refreshForm } from './PostFormActions'

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
    type: 'FETCH_POSTS'
  }
}

const receivePosts = (posts) => {
  return {
    type: 'FETCH_POSTS',
    status: 'success',
    posts
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(requestPosts())
    return fetch(`${process.env.API_HOST}/api/v1/posts.json`).then((response) => {
      return response.json()
    }).then(json => {
      dispatch(receivePosts(json.posts || []))
    })
  }
}

const fetchPostRequest = () => {
  return {
    type: 'FETCH_POST'
  }
}

const fetchPostSuccess = (post) => {
  return {
    type: 'FETCH_POST',
    status: 'success',
    post
  }
}

export const fetchPost = (id) => {
  return (dispatch) => {
    dispatch(fetchPostRequest())
    return fetch(`${process.env.API_HOST}/api/v1/posts/${id}.json`).then((response) => {
      return response.json()
    }).then(json => {
      dispatch(fetchPostSuccess(json.post))
    })
  }
}

const addPostRequest = () => {
  return {
    type: 'ADD_POST'
  }
}

const addPostSuccess = (post) => {
  return {
    type: 'ADD_POST',
    status: 'success',
    post
  }
}

const addPostFailure = (message) => {
  return {
    type: 'ADD_POST',
    status: 'failure',
    message
  }
}

export const addPost = (post) => {
  return (dispatch) => {
    dispatch(addPostRequest())
    fetch(`${process.env.API_HOST}/api/v1/posts.json`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ post: post })
    }).then(response => {
      return response.json()
    }).then(json => {
      if (json.post.errors)
        dispatch(addPostFailure(json.post.errors))
      else {
        dispatch(addPostSuccess(json.post))
        dispatch(refreshForm())
      }
    })
  }
}

const destroyPostRequest = () => {
  return {
    type: 'DESTROY_POST'
  }
}

const destroyPostSuccess = (id) => {
  return {
    type: 'DESTROY_POST',
    status: 'success',
    id
  }
}

const destroyPostFailure = (message) => {
  return {
    type: 'DESTROY_POST',
    status: 'failure',
    message
  }
}

export const destroyPost = (id, shouldRedirect = false) => {
  return (dispatch) => {
    dispatch(destroyPostRequest())
    fetch(`${process.env.API_HOST}/api/v1/posts/${id}.json`, {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify({ id })
    }).then(response => {
      return response.json()
    }).then(json => {
      if (json.post.errors)
        dispatch(destroyPostFailure(json.post.errors))
      else
        if (shouldRedirect)
          browserHistory.push('/')
        else
          dispatch(destroyPostSuccess(json.post.id))
    })
  }
}
