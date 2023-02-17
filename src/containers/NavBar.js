import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import {setLoggedInBool} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    loggedInBool: state.loggedInBool
  }
}

const mapDispatchToProps = () => {
  return {
    setLoggedInBool: (bool)=>dispatchEvent(setLoggedInBool(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)