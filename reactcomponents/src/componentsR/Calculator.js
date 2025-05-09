import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict';


export class Calculator extends Component {
     state = {
        temperature : 0,
        
    }
    tempChange = (e) =>{
        
        console.log(' :', e.target.value );
        this.setState({
            temperature: parseFloat(e.target.value)

        });
    }

  render() {

    return (
      <div>

        <TemperatureInput scales="c" temperature={this.state.temperature} tempChange={this.tempChange}/>
        <TemperatureInput scales="f" temperature={this.temperature} tempChange={this.tempChange}/>
        <BoilingVerdict celcious={this.state.temperature}/>

      </div>
    )
  }
}

export default Calculator