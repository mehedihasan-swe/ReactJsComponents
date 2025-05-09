import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'


export class Calculator extends Component {

  render() {

    return (
      <div>

        <TemperatureInput scales="c" />
        <TemperatureInput scales="f" />

      </div>
    )
  }
}

export default Calculator