import React, { Component } from 'react'
import ErrorField from '../errorField/errorFieldContainer'
import Typography from 'material-ui/Typography'

export default class FormField extends Component {
  constructor (props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    // this.value = this.props[this.props.field]
  }

  changeValue ({target: {value}}) {
    this.props.changeStateProps(this.props.field, value)
    // this.value = this.props[this.props.field]
  }

  render () {
    return (
      <div>
        <Typography gutterBottom={true} type="display1">{this.props.field}</Typography>
        <input type={this.props.type || 'text'} onChange={this.changeValue} />
        <ErrorField field={this.props.field} />
      </div>
    )
  }
}
