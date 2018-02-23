import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

export default class ErrorField extends Component {
  render () {
    return (
      <Typography color='error'>{this.props.error}</Typography>
    )
  }
}
