import update from 'immutability-helper'

let defaultState = {
  canSave: false,
  user: {
    name: {
      value: '',
      isRequired: true
    },
    email: {
      value: '',
      isRequired: true
    },
    phone: {
      value: '',
      isRequired: false
    },
    address: {
      value: '',
      isRequired: false
    },
    postcode: {
      value: '',
      isRequired: true
    },
    birthDate: {
      value: '',
      isRequired: true
    },
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
      console.log('data in reducer', action.state)
      return update(state, {
        user: {
          [action.state.prop]: {
            value: {$set: action.state.value}
          },
        },
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

    case 'CHECK_FORM_VALUES':
      console.log('error in field',action.errors, action.errors)
      return update(state, {
        canSave: {$set: action.canSave}
      })
    default:
      return state
  }
}

export default main
