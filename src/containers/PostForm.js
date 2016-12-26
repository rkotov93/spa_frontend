import { handleTitleInputChange, handleBodyInputChange, refreshForm } from "../actions/PostFormActions"
import { requestPostAdd } from "../actions/PostActions"
import { connect } from "react-redux"
import PostForm from "../components/PostForm"

const mapStateToProps = (state) => {
  return {
    title: state.postForm.title,
    body: state.postForm.body
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
      dispatch(requestPostAdd(post))
    },
    refreshForm: () => {
      dispatch(refreshForm())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)
