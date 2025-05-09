import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict';
import { convert, toCelsius, toFahrenheit } from './converter';


export class Calculator extends Component {
  state = {
    temperature: 0,
    scales: 'c'

  }
  tempChange = (e, scales) => {

    console.log(' :', e.target.value);
    this.setState({
      temperature: e.target.value,
      scales
    });
  }

  render() {
    const { temperature, scales } = this.state;
    const fahrenheit = scales === 'c' ? convert(temperature, toFahrenheit) : temperature;
    const celsius = scales === 'f' ? convert(temperature, toCelsius) : temperature;
    
    return (
      <div>

        <TemperatureInput scales="c" temperature={celsius} tempChange={this.tempChange} />
        <TemperatureInput scales="f" temperature={fahrenheit} tempChange={this.tempChange} />
        <BoilingVerdict celcious={parseFloat(temperature)} />

      </div>
    )
  }
}

export default Calculator