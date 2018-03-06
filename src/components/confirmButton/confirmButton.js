import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

export default class ConfirmButtton extends Component {
  render () {
    return (
      <div>
        <br />
        <Button raised color='primary' onClick={e => this.props.checkValues(this.props.state.main.user)}>Confirm</Button>
        {this.props.state.main.canSave ? <Typography color='primary' type='display1'>Everything saved</Typography> : <Typography color='error' type='display1'>Please fill in the data.</Typography>}
      </div>
    )
  }
}
