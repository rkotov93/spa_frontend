import { connect } from 'react-redux'
import PostsList from '../components/PostsList'
import { destroyPost } from '../actions/PostActions'

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id) => {
      dispatch(destroyPost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
