import React from 'react'
import { Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap'

const LoginPage = ({ email, isFetching, errorMessage, onEmailChange, onFormSubmit }) => {
  let emailInput
  let passwordInput

  return (
    <Row>
      <Col md={12}>
        <h3>Login</h3>

        <form>
          {errorHandler(errorMessage)}
          <FormGroup>
            <FormControl
              inputRef={node => emailInput = node}
              type="text"
              placeholder="Email"
              name="user[email]"
              onChange={() => onEmailChange(emailInput.value)}
              defaultValue={email}
              disabled={isFetching}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              inputRef={node => passwordInput = node}
              type="password"
              placeholder="Password"
              name="user[password]"
              disabled={isFetching}
            />
          </FormGroup>
          <Button
            bsStyle='primary'
            style={{ width: '100%' }}
            onClick={() => {
              onFormSubmit(emailInput.value, passwordInput.value)
            }}
            // disabled={emailInput.value === '' ||  passwordInput.value === '' || isFetching}
          >
            Login
          </Button>
        </form>
      </Col>
    </Row>
  )
}

const errorHandler = (message) => {
  if (message)
    return (<p style={{ color: 'red' }}>{message}</p>)
}

export default LoginPage
