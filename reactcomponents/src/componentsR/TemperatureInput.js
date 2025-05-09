import React, { Component } from 'react'

const Scalenames={
     c:"Celcious",
     f:"Farenheight"
}

export class TemperatureInput extends Component {
   
  render() {
    const {temperature,scales,tempChange}=this.props;
    
    return (
      <div>
        <fieldset>
            <p>Enter Temperature in {Scalenames[scales]}</p> <br/>
            <input type='text' onChange={tempChange} value={temperature}/>
        </fieldset>
        
      </div>
    )
  }
}

export default TemperatureInput