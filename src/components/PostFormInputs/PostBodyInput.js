import React, { Component } from "react"
import ReactDOM from "react-dom"

import { FormGroup, FormControl } from "react-bootstrap"

export default class PostBodyInput extends Component {
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
          componentClass="textarea"
          placeholder="Content"
          name="post[body]"
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
    return length > 0
  }

  _getValidationState() {
    const valid = this._isValid(this.state.value)
    const touched = this.state.touched
    if (valid) return "success"
    else if (touched) return "error"
  }

  _handleChange(e) {
    const validity = this._isValid(e.target.value)
    this.props.setValidity("body", validity)
    this.setState({ value: e.target.value, touched: true })
  }
}
