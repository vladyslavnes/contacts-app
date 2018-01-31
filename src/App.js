import React, { Component } from 'react'
import './App.css'
import FormField from './components/formField/formFieldContainer'
import ConfirmButton from './components/confirmButton/confirmButtonContainer'

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
        <ConfirmButton />
      </div>
    )
  }
}

export default App
