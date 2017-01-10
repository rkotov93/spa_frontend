import { connect } from "react-redux"
import PostPage from "../components/PostPage"
import { requestPostDestroy } from "../actions/PostActions"

const mapStateToProps = (state) => {
  return {
    ...state.posts.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDestroy: (id) => {
      dispatch(requestPostDestroy(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
