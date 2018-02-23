import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import formField from './formField'

const mapStateToProps = (state, ownProps) => {
  return {
    // return only form field value needed for this component
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
