import update from 'immutability-helper'

let defaultState = {
  canSave: false,
  user: {
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    birthDate: ''
  },
  errors: {
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    birthDate: ''
  }
}

const main = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_STATE_PROPS':
      return update(state, {
        user: {
          // set store field with corresponding variable
          [action.state.prop]: {
            $set: action.state.value
          }
        },
        errors: {
          [action.state.prop]: {$set: ''}
        }
      })

    case 'SHOW_FORM_ERROR':
      return update(state, {
        errors: {
          [action.error.field]: {$set: action.error.message}
        }
      })

    case 'CHECK_FORM_VALUES':
      return update(state, {
        canSave: {$set: action.canSave},
        errors: {$set: action.errors}
      })
    default:
      return state
  }
}

export default main
