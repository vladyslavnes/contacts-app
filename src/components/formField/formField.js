import React, { Component } from 'react'
import ErrorField from '../errorField/errorFieldContainer'
import Typography from 'material-ui/Typography'

export default class FormField extends Component {
  constructor (props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)

    this.state = { // Get store value by the key given in props
      value: this.props[this.props.field]
    }
  }

  componentDidMount() {
    this.changeValue({target: {value: this.state.value}})
  }

  changeValue ({target: {value}}) {
    this.props.changeStateProps(this.props.field, value)
    this.setState({value}) // Set input value - single source of truth
  }

  render () {
    return (
      <div className='field'>
        <Typography gutterBottom={true} type='display1'>{this.props.field}</Typography>
        <input type={this.props.type || 'text'} value={this.state.value} required={this.props.required} onChange={this.changeValue} />
        <ErrorField field={this.props.field} />
      </div>
    )
  }
}
