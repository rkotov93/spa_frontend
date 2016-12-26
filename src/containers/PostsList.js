import { connect } from "react-redux"
import PostsList from "../components/PostsList"
import { requestPostDestroy } from "../actions/PostActions"

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id) => {
      dispatch(requestPostDestroy(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
