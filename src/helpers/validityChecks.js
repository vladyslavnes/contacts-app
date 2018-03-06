export default {
  name: name => {
    console.log('name', name)
    if (!name) {
      return 'This field is required'
    } else if (!name.match(/^[a-zA-Z\s]{5,}$/)) {
      return 'Your name should be longer than 5 characters and contain letters only'
    } else return true
  },

  email: email => {
    if (!email) {
      return 'This field is required'
    // eslint-disable-next-line
    } else if (!email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
      return 'Please enter a correct email address'
    } else return true
  },

  phone: phoneNumber => {
    // Standard phone number is longer than 8 chars and shorter than 16
    if (phoneNumber.length > 15 || phoneNumber.length < 9) {
      return 'The standard phone number is 9-15 digits long'
    } else if (!phoneNumber.match(/^\+?\d+(-\d+)*$/)) {
      return 'Please enter your phone number in international format'
    } else return true
  },

  address: address => {
    if (!address.match(/\d* [a-zA-z]* St\./)) {
      return 'Please enter your address (E.g: 253 Cherry St.).'
    } else return true
  },

  postcode: postcode => {
    if (postcode.length < 25 && postcode.length > 3) {
      return true
    } else return 'Your postcode should be a number 3 to 25 digits long'
  },

  birthDate: dateString => {
    let year = (new Date(dateString)).getFullYear()
    // if date not given or complains the rules
    if ((new Date()).getFullYear() - 5 <= year) {
      return 'We do not serve people younger than 5 years and people from future'
    } else if (isNaN(+year)) {
      return 'This field is required'
    } else return true
  }
}
