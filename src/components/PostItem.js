import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

const PostItem = ({ id, title, body, author, onDestroy }) => {
  return (
    <Row id={id} className='news-post'>
      <Col md={12}>
        <Button
          className='close'
          onClick={() => {
            onDestroy(id)
          }}
        >
          <span aria-hidden='true'>&times;</span>
        </Button>
        <Link to={`/posts/${id}`}>
          <h3 className='post-title'>{title}</h3>
        </Link>
        <p className='post-body'>{body}</p>
        <p className='post-author'>{author}</p>
        <hr />
      </Col>
    </Row>
  )
}

PostItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  author: React.PropTypes.string
}

export default PostItem
