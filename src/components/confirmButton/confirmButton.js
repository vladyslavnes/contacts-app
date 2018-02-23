import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

export default class ConfirmButtton extends Component {
  render () {
    return (
      <div>
        <br />
        <Button raised color='primary' onClick={e => this.props.checkValues(this.props.state.main.errors)}>Confirm</Button>
        {this.props.state.main.canSave ? <Typography color='primary' type='display1'>Everything saved</Typography> : <Typography color='error' type='display1' >Could not save the data because of errors. Please check all fields again.</Typography>}
      </div>
    )
  }
}
