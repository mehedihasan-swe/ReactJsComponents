import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict';


const Scalenames={
     c:"Celcious",
     f:"Farenheight"
}

export class TemperatureInput extends Component {
        state = {
        temperature : 0,
        
    }
    tempChange = (e) =>{
        this.setState({
            temperature:e.target.value

        });
    }

  render() {
    const {temperature}=this.state;
    const {scales}=this.props
    return (
      <div>
        <fieldset>
            <lagend>Enter Temperature in {Scalenames[scales]}</lagend> <br/>
            <input type='text' onChange={this.tempChange} value={temperature}></input>
        </fieldset>
        <BoilingVerdict celcious={temperature}/>
      </div>
    )
  }
}

export default TemperatureInput