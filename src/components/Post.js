import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"

export default class Post extends Component {
  render() {
    return (
      <Row id={this.props.id} className="news-post">
        <Col md={12}>
          <h3 className="post-title">{this.props.title}</h3>
          <p className="post-body">{this.props.body}</p>
          <p className="post-author">{this.props.author}</p>
          <hr />
        </Col>
      </Row>
    )
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string,
  author: React.PropTypes.string
}
