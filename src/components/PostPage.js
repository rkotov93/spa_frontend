import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const PostPage = ({ id, title, body, author, avatar, onDestroy, isAuthenticated }) => {
  return (
    <Row id={id} className='news-post'>
      <Col md={12}>
        <Button
          className='close'
          onClick={() => {
            onDestroy(id)
          }}
        >
          {isAuthenticated && <span aria-hidden='true'>&times;</span>}
        </Button>
        <h3 className='post-title'>{title}</h3>
        <p className='post-body'>{body}</p>
        <p className='post-author'>{author}</p>
        {avatar && <img src={avatar} />}
        <hr />
      </Col>
    </Row>
  )
}

export default PostPage
