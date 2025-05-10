import { Button } from '@mui/material'
import styled from 'styled-components'
import withCounter from './WithCounter'

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


const Clickcounter = (props)=>{
    const {count, increament}=props
    return (
      <div>
        <Btns type="button" onClick={increament}>
          {count}
        </Btns>
      </div>
    )

}

export default withCounter(Clickcounter)
