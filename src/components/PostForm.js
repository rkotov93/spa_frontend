import React, { Component } from "react"

import { Row, Col, Button } from "react-bootstrap"

import PostTitleInput from "./PostFormInputs/PostTitleInput"
import PostBodyInput from "./PostFormInputs/PostBodyInput"

export default class PostForm extends Component {
  constructor() {
    super()
    this.state = {
      validity: {
        title: false,
        body: false
      }
    }
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <h3>Add your post</h3>

          <form ref="newPostForm">
            <PostTitleInput ref="titleInput" setValidity={this._setValidity.bind(this)} />
            <PostBodyInput ref="bodyInput" setValidity={this._setValidity.bind(this)} />
            <Button
              bsStyle="primary"
              style={{ width: "100%" }}
              onClick={this._handleSubmit.bind(this)}
              disabled={!this._isFormValid()}
            >
              Create
            </Button>
          </form>
        </Col>
      </Row>
    )
  }

  _setValidity(input, status) {
    const validity = this.state.validity
    validity[input] = status
    this.setState({ validity: validity })
  }

  _isFormValid() {
    return this.state.validity.title && this.state.validity.body
  }

  _handleSubmit() {
    fetch("http://localhost:3000/api/v1/posts", {
      method: "POST",
      body: new FormData(this.refs.newPostForm)
    }).then(response => {
      this.refs.titleInput._clearInput()
      this.refs.bodyInput._clearInput()
      return response.json()
    }).then(newPost => {
      this.props.addNewPost(newPost)
    })
  }
}
