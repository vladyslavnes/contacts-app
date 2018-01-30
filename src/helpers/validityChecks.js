export default {
  name: name => {
    if (name.match(/^[a-zA-Z\d\s]{5,}$/)) {
      return true
    } else return 'Your name should be longer than 5 characters and only alpha-numerical values are supported'
  },

  email: email => {
    
    if (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return true
    } else return 'Please enter a correct email'
  },

  phone: phoneNumber => {
    if (phoneNumber.length <= 15 && phoneNumber.length >= 9 && phoneNumber.match(/^\+?\d+(-\d+)*$/)) {
      return true
    } else return 'Please enter your phone number in international format'
  },
  
  address: address => {
      let addressArray = address.split(',').map(el => el.trim())
      if (addressArray.length === 4 && !isNaN(+addressArray[3])) {  
        return true
      } else return 'Please enter your address in format: Country, City, Street, house number'
  },

  postcode: postcode => {
    if (postcode.length < 25 && postcode.length > 3) {
      return true
    } else return "Your postcode should be a number between 3 and 25 characters"
  },

  birthDate: dateString => {
     let date = new Date(dateString),
     year = date.getFullYear()

     if ((new Date()).getYear() >= year - 5) {
        return 'We do not serve people below 5 years and people from future'
     } else return true
    },
}