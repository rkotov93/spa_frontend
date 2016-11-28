import React, { Component } from "react"
import ReactDOM from "react-dom"

import { FormGroup, FormControl } from "react-bootstrap"

export default class PostTitleInput extends Component {
  constructor() {
    super()
    this.state = {
      value: "",
      touched: false
    }
  }

  render() {
    return (
      <FormGroup validationState={this._getValidationState()}>
        <FormControl
          ref="input"
          type="text"
          placeholder="Post title"
          name="post[title]"
          onChange={this._handleChange.bind(this)}
        />
      </FormGroup>
    )
  }

  _clearInput() {
    this.setState({
      value: "",
      touched: false
    })
    ReactDOM.findDOMNode(this.refs.input).value = ""
  }

  _isValid(value) {
    const length = value.length
    return length > 0 && length <= 120
  }

  _getValidationState() {
    const touched = this.state.touched
    const valid = this._isValid(this.state.value)

    if (valid) return "success"
    else if (touched && !valid) return "error"
  }

  _handleChange(e) {
    const validity = this._isValid(e.target.value)
    this.props.setValidity("title", validity)
    this.setState({ value: e.target.value, touched: true })
  }
}
