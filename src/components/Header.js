import React from 'react'
import { Link } from 'react-router'
import LoginButton from '../components/LoginButton'

const Header = ({ isAuthenticated, logout, refresh }) => {
  return (
    <span>
      <h1>
        <Link
          to="/"
          onClick={() => {
            refresh()
          }}
        >
          News
        </Link>
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
