import React, { Component } from 'react'
import './App.css'

import logo from './assets/logo.svg'
import FormField from './components/formField/formFieldContainer'
import ConfirmButton from './components/confirmButton/confirmButtonContainer'

import Paper from 'material-ui/Paper'

class App extends Component {
  render () {
    return (
      <Paper className='App' elevation={5} style={{margin: 150}}>
        <img src={logo} alt='' width={150} height={150} />
        <FormField field='name' />
        <FormField field='email' type='email' />
        <FormField field='phone' type='tel' />
        <FormField field='address' />
        <FormField field='postcode' type='number' />
        <FormField field='birthDate' type='date' />
        <ConfirmButton />
      </Paper>
    )
  }
}

export default App
