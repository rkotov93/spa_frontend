import React from 'react'
import LoginButton from '../components/LoginButton'

const Header = ({ isAuthenticated, logout }) => {
  return (
    <span>
      <h1>
        News
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
