import { connect } from 'react-redux'
import { checkValues } from '../../actions'
import confirmButton from './confirmButton'

const mapStateToProps = (state, ownProps) => ({
  checkValues,
  state,
  ...ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkValues: (errors) => {
      dispatch(checkValues(errors))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(confirmButton)
