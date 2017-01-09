import React from "react"
import Post from "../components/Post"

const PostsList = ({ posts, onDestroy }) => {
  return (
    <div>
      {
        posts.map(post => {
          return <Post key={`post_${post.id}`} onDestroy={onDestroy} {...post} />
        })
      }
    </div>
  )
}

PostsList.propTypes = {
  posts: React.PropTypes.array.isRequired,
  onDestroy: React.PropTypes.func.isRequired
}

export default PostsList
