import { login, handleEmailInputChange } from '../actions/LoginActions'
import LoginPage from '../components/LoginPage'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    isFetching: state.login.isFetching,
    errorMessage: state.login.errorMessage
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
