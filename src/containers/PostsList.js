import { connect } from 'react-redux'
import PostsList from '../components/PostsList'
import { destroyPost, turnPage } from '../actions/PostActions'

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items,
    currentPage: state.posts.currentPage,
    totalPages: state.posts.totalPages,
    isAuthenticated: state.authentication.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id, page) => {
      dispatch(destroyPost(id, page))
    },
    turnPage: (page) => {
      dispatch(turnPage(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
