import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

const LoginButton = ({ isAuthenticated, logout, additional }) => {
  if (isAuthenticated)
    return (
      <Button
        bsStyle="primary"
        onClick={() => logout()}
        {...additional}
      >
        Logout
      </Button>
    )
  else
    return (
      <Link to="/login">
        <Button
          bsStyle="primary"
          {...additional}
        >
          Login
        </Button>
      </Link>
    )
}

export default LoginButton
