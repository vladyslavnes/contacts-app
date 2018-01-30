import React, { Component } from 'react'
import ErrorField from '../errorField/errorFieldContainer'
import Button from 'material-ui/Button'

export default class ConfirmButtton extends Component {
  checkValues () {
    this.props.checkValues()
  }

  render () {
    return (
      <div>
        <Button raised color='primary'>Confirm</Button>
      </div>
    )
  }
}
