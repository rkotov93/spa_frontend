import { connect } from 'react-redux'
import Header from '../components/Header'
import { logout } from '../actions/AuthenticationActions'
import { fetchPosts } from '../actions/PostActions'

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    },
    refresh: () => {
      dispatch(fetchPosts())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
