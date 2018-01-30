import update from 'immutability-helper'

let defaultState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  postcode: '',
  birthDate: '',
  errors: {
    name: ''
  }
}

const main = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_STATE_PROPS':
      console.log('data in reducer', action.state)
      return update(state, {
        [action.state.prop]: {$set: action.state.value},
        errors: {
          [action.state.prop]: {$set: ''}
        }
      })

    case 'SHOW_FORM_ERROR':
      console.log('error in field',action.error.field, action.error.message)
      return update(state, {
        errors: {
          [action.error.field]: {$set: action.error.message}
        }
      })
    default:
      return state
  }
}

export default main
