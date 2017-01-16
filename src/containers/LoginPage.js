import { login, handleEmailInputChange } from '../actions/AuthenticationActions'
import LoginPage from '../components/LoginPage'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    email: state.authentication.email,
    isFetching: state.authentication.isFetching,
    errorMessage: state.authentication.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: (email) => {
      dispatch(handleEmailInputChange(email))
    },
    onFormSubmit: (email, password) => {
      dispatch(login({ email, password }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
