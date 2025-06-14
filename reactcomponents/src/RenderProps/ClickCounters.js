import { Button } from '@mui/material';
import React, { Component } from 'react'
import styled from 'styled-components';





const Btns = styled(Button)`
  padding: 10px 85px !important;
  background-color: purple !important;
  color: white !important;
  font-size: 18px;
  margin-bottom: 40px !important;
  &:hover {
    background-color: darkviolet !important;
    cursor: pointer;
    color: white;
  }
`


export class ClickCounters extends Component {

  render() {
        const {count,increament}= this.props;
    return (
      <div>
        <Btns type="button" onClick={increament}>
          {count}
        </Btns>
      </div>
    )
  }
}

export default ClickCounters