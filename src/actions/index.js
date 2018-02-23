import validityChecks from '../helpers/validityChecks'
export const changeStateProps = (prop, value) => {
  
  let validity = validityChecks[prop](value)
  console.log(validity)

  if (validity === true) { // if there's no error
    return {
      type: 'CHANGE_STATE_PROPS', // change store value
      state: {
        prop,
        value
      }
    }
  }

  return { // otherwise
    type: 'SHOW_FORM_ERROR', // raise error action
    error: {
      message: validity,
      field: prop
    }
  }
}

export const checkValues = errors => {
  let canSave = true
  for (let error in errors) {
    console.log(errors[error])
    if (errors[error]) { // if any eror occurs, form will not be confirmed
      canSave = false
    }
  }

  return {
    type: 'CHECK_FORM_VALUES',
    canSave
  }
}
