import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"

export default class Post extends Component {
  render() {
    return (
      <Row id={this.props.id}>
        <Col md={12}>
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <hr />
        </Col>
      </Row>
    )
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
}
