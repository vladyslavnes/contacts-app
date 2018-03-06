import validityChecks from '../helpers/validityChecks'
export const changeStateProps = (prop, value) => {
  return {
    type: 'CHANGE_STATE_PROPS', // change store value
    state: {
      prop,
      value
    }
  }
}

export const checkValues = (props) => {
  let errors = []
  let canSave = true
  console.log('props in checkValues', props)
  for (let prop in props) {
    const validity = validityChecks[prop](props[prop])
    console.log(validity)
    if (validity !== true) {
      errors[prop] = validity
      canSave = false
    }
  }

  return {
    type: 'CHECK_FORM_VALUES',
    errors,
    canSave
  }
}
