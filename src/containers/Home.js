import { connect } from 'react-redux'
import Home from '../components/Home'
import {removeListing} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    listings: state.listings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index)=>dispatch(removeListing(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)