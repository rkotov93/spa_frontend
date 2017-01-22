import React from 'react'
import PostItem from '../components/PostItem'
import PostForm from '../containers/PostForm'

import { Pagination } from 'react-bootstrap'

const PostsList = ({ posts, onDestroy, isAuthenticated, currentPage, totalPages, turnPage }) => {
  return (
    <div>
      {
        posts.map(post => {
          return <PostItem
                   key={`post_${post.id}`}
                   onDestroy={(id) => {
                     onDestroy(id, currentPage)
                   }}
                   isAuthenticated={isAuthenticated}
                   {...post} />
        })
      }
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={totalPages}
        maxButtons={5}
        activePage={currentPage || 1}
        onSelect={turnPage} />
      {isAuthenticated && <PostForm />}
    </div>
  )
}

PostsList.propTypes = {
  posts: React.PropTypes.array.isRequired,
  onDestroy: React.PropTypes.func.isRequired
}

export default PostsList
