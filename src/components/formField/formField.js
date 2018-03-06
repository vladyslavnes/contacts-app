import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'

export default class FormField extends Component {
  constructor (props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)

    this.state = { // Get store value by the key given in props
      value: this.props[this.props.field]
    }
  }

  changeValue ({target: {value}}) {
    this.props.changeStateProps(this.props.field, value)
    this.setState({value}) // Set input value - single source of truth
  }

  render () {
    return (
      <form>
        <TextField
          label={this.props.field}
          value={this.state.value}
          onChange={this.changeValue}
          type={this.props.type || 'text'}
          required={this.props.required}
          InputLabelProps={{
            shrink: true
          }}
          margin='normal'
        />
        <Typography color='error'>{this.props.error}</Typography>
      </form>
    )
  }
}
