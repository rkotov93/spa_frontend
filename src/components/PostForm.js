import React, { Component } from "react"
import ReactDOM from "react-dom"

import { Row, Col, Button, FormGroup, FormControl } from "react-bootstrap"

export default class PostForm extends Component {
  constructor() {
    super()
    this.state = {
      title: { value: "", validity: false, touched: false },
      body: { value: "", validity: false, touched: false }
    }
  }

  render() {
    const { store } = this.context
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
          <br />
          <Button
            bsStyle="success"
            style={{ width: "100%" }}
            onClick={() => {
              store.dispatch({
                type: "ADD_POST"
              })
            }}
          >
            TEST
          </Button>
        </Col>
      </Row>
    )
  }

  _isFormValid() {
    return this.state.title.validity && this.state.body.validity
  }

  _handleInputChange(e) {
    const field = e.target.dataset["name"]
    const value = e.target.value
    const validity = this._validate(field, value)

    const newState = {}
    newState[field] = { value: value, validity: validity, touched: true }
    this.setState(newState)
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
    const touched = this.state.title.touched
    const valid = this.state.title.validity

    if (valid) return "success"
    else if (touched && !valid) return "error"
  }

  _bodyInputValidationState() {
    const touched = this.state.body.touched
    const valid = this.state.body.validity

    if (valid) return "success"
    else if (touched) return "error"
  }

  _clearInputs() {
    ReactDOM.findDOMNode(this.refs.titleInput).value = ""
    ReactDOM.findDOMNode(this.refs.bodyInput).value = ""
    this.setState({
      title: { value: "", validity: false, touched: false },
      body: { value: "", validity: false, touched: false }
    })
  }

  _handleSubmit() {
    fetch(`${process.env.API_HOST}/api/v1/posts`, {
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
PostForm.contextTypes = {
  store: React.PropTypes.object
}
