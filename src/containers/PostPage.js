import { connect } from 'react-redux'
import PostPage from '../components/PostPage'
import { destroyPost } from '../actions/PostActions'

const mapStateToProps = (state) => {
  return {
    ...state.posts.current,
    isAuthenticated: state.authentication.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id, shouldRedirect) => {
      dispatch(destroyPost(id, shouldRedirect))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
