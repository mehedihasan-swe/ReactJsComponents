import React, { Component } from 'react'

export class Hovercounters extends Component {

  render() {
        const {count,increament}= this.props;
    return (
      <div>
        <h1  onMouseOver={increament}>Hoverd
          {count} times
        </h1>
      </div>
    )
  }
}

export default Hovercounters