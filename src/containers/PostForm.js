import { handleTitleInputChange, handleBodyInputChange } from "../actions/PostFormActions"
import { addPost } from "../actions/PostActions"
import { connect } from "react-redux"
import PostForm from "../components/PostForm"

const mapStateToProps = (state) => {
  return {
    title: state.postForm.title,
    body: state.postForm.body,
    isFetching: state.posts.isFetching,
    message: state.posts.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange: (value) => {
      dispatch(handleTitleInputChange(value))
    },
    onBodyChange: (value) => {
      dispatch(handleBodyInputChange(value))
    },
    onFormSubmit: (post) => {
      dispatch(addPost(post))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)
