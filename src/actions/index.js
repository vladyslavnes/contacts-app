import validityChecks from '../helpers/validityChecks'
console.log(validityChecks)

export const changeStateProps = (prop, value) => {
  // console.log('action triggered', prop, value)
  let validity = validityChecks[prop](value)
  // console.log(validity)
  if (validity === true) {
    return {
      type: 'CHANGE_STATE_PROPS',
      state: {
        prop,
        value
      }
    }
  }

  return {
    type: 'SHOW_FORM_ERROR',
    error: {
      message: validity,
      field: prop
    }
  }
}

export const checkValues = (errors) => {
  console.log('checkValues', errors)
  let canSave = true
  for (let error in errors) {
    if (errors[error] !== '') {
      canSave = false
    }
  }

  return {
    type: 'CHECK_FORM_VALUES',
    canSave
  }
}