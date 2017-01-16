import React from 'react'
import { Link } from 'react-router'
import LoginButton from '../components/LoginButton'

const Header = ({ isAuthenticated, logout }) => {
  return (
    <span>
      <h1>
        <Link to="/">News</Link>
        <LoginButton
          isAuthenticated={isAuthenticated}
          logout={logout}
          additional={{
            className: 'pull-right'
          }}
        />
      </h1>
    </span>
  )
}

export default Header
