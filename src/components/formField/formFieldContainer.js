import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import formField from './formField'

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  console.log('ownProps', ownProps)
  return {
    [ownProps.field]: state.main.user[ownProps.field].value,
    required: state.main.user[ownProps.field].isRequired,
    error: state.main.errors[ownProps.field],
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStateProps: (prop, value) => {
      dispatch(changeStateProps(prop, value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(formField)
