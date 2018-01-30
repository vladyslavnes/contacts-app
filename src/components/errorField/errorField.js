import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

export default class ErrorField extends Component {
  render () {
  	console.log('error in errorField', this.props.error)
    return (
      <Typography color="error">{this.props.error}</Typography>
    )
  }
}
