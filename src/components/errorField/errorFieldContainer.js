import { connect } from 'react-redux'
import SecondComponent from './errorField'

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.main.errors[ownProps.field],
    ...ownProps
  }
}

export default connect(
  mapStateToProps)(SecondComponent)
