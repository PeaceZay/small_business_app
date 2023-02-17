import { connect } from 'react-redux'
import Login from '../components/Login'
import {setUser, setLoggedInBool} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user)=>dispatch(setUser(user)),
    setLoggedInBool: (bool)=>dispatch(setLoggedInBool(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)