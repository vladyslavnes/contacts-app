import React, { Component } from 'react'
import './App.css'
import FormField from './components/formField/formFieldContainer'
// import ErrorField from './components/errorField/errorFieldContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <FormField field='name' />
        <FormField field='email' type='email' />
        <FormField field='phone' type='tel' />
        <FormField field='address' />
        <FormField field='postcode' type='number' />
        <FormField field='birthDate' type='date' />
      </div>
    )
  }
}

export default App
