import React, { Component } from "react"
import ReactDOM from "react-dom"

import { Row, Col, Button, FormGroup, FormControl } from "react-bootstrap"

export default class PostForm extends Component {
  constructor() {
    super()
    this.state = {
      values: {
        title: "",
        body: ""
      },
      validity: {
        title: false,
        body: false
      },
      touched: {
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
            <FormGroup validationState={this._titleInputValidationState()}>
              <FormControl
                ref="titleInput"
                type="text"
                placeholder="Post title"
                name="post[title]"
                onChange={this._handleInputChange.bind(this)}
                data-name="title"
              />
            </FormGroup>
            <FormGroup validationState={this._bodyInputValidationState()}>
              <FormControl
                ref="bodyInput"
                componentClass="textarea"
                placeholder="Content"
                name="post[body]"
                onChange={this._handleInputChange.bind(this)}
                data-name="body"
              />
            </FormGroup>
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

  _isFormValid() {
    return this.state.validity.title && this.state.validity.body
  }

  _handleInputChange(e) {
    const field = e.target.dataset["name"]
    const value = e.target.value
    const validity = this._validate(field, value)

    const valuesState = this.state.values
    valuesState[field] = value

    const validityState = this.state.validity
    validityState[field] = validity

    const touchedState = this.state.touched
    touchedState[field] = true

    this.setState({ values: valuesState, validity: validityState, touched: touchedState })
  }

  _validate(field, value) {
    if (field === "title")
      return this._isTitleValid(value)
    else if (field === "body")
      return this._isBodyValid(value)
    return false
  }

  _isTitleValid(value) {
    return value.length > 0 && value.length <= 120
  }

  _isBodyValid(value) {
    return value.length > 0
  }

  _titleInputValidationState() {
    const touched = this.state.touched.title
    const valid = this.state.validity.title

    if (valid) return "success"
    else if (touched && !valid) return "error"
  }

  _bodyInputValidationState() {
    const touched = this.state.touched.body
    const valid = this.state.validity.body

    if (valid) return "success"
    else if (touched) return "error"
  }

  _clearInputs() {
    ReactDOM.findDOMNode(this.refs.titleInput).value = ""
    ReactDOM.findDOMNode(this.refs.bodyInput).value = ""
    this.setState({
      values: {
        title: "",
        body: ""
      },
      validity: {
        title: false,
        body: false
      },
      touched: {
        title: false,
        body: false
      }
    })
  }

  _handleSubmit() {
    fetch("http://localhost:3000/api/v1/posts", {
      method: "POST",
      body: new FormData(this.refs.newPostForm)
    }).then(response => {
      this._clearInputs()
      return response.json()
    }).then(newPost => {
      this.props.addNewPost(newPost)
    })
  }
}
