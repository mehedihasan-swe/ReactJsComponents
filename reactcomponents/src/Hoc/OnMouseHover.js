

import withCounter from './WithCounter'

const OnMouseHover = (props)=>{
    const {count, increament}=props
    return (
      <div>
        <h1  onMouseOver={increament}>Hoverd
          {count} times
        </h1>
      </div>
    )

}

export default withCounter(OnMouseHover)
