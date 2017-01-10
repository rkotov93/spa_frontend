import React from "react"
import PostItem from "../components/PostItem"
import PostForm from "../containers/PostForm"

const PostsList = ({ posts, onDestroy }) => {
  return (
    <div>
      {
        posts.map(post => {
          return <PostItem key={`post_${post.id}`} onDestroy={onDestroy} {...post} />
        })
      }
      <PostForm />
    </div>
  )
}

PostsList.propTypes = {
  posts: React.PropTypes.array.isRequired,
  onDestroy: React.PropTypes.func.isRequired
}

export default PostsList
