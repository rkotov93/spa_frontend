export const initPosts = (posts) => {
  return {
    type: "INIT_POSTS",
    posts
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    fetch(`${process.env.API_HOST}/api/v1/posts.json`).then((response) => {
      return response.json()
    }).then((posts) => {
      dispatch(initPosts(posts || []))
    })
  }
}

export const addPost = (post) => {
  return {
    type: "ADD_POST",
    post
  }
}

export const requestPostAdd = (post) => {
  return (dispatch) => {
    fetch(`${process.env.API_HOST}/api/v1/posts.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: post })
    }).then(response => {
      return response.json()
    }).then(post => {
      dispatch(addPost(post))
    })
  }
}

export const destroyPost = (id) => {
  return {
    type: "DESTROY_POST",
    id
  }
}

export const requestPostDestroy = (id) => {
  return (dispatch) => {
    fetch(`${process.env.API_HOST}/api/v1/posts/${id}.json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(response => {
      return response.json()
    }).then(post => {
      dispatch(destroyPost(post.id))
    })
  }
}
