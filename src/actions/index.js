import validityChecks from '../helpers/validityChecks'
console.log(validityChecks)

export const changeStateProps = (prop, value) => {
  console.log('action triggered', prop, value)
  let validity = validityChecks[prop](value)
  console.log(validity)
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
