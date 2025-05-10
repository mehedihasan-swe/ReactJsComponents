
import React, { Component } from 'react'

const withCounter = (OriginalComponent) => {

    class NewComponent extends Component {
        state = {
            count: 0
        }

        increament = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }))
        }


        render(){
            const {count}= this.state

            return <OriginalComponent count={count} increament={this.increament}/>
        }


    }

    return NewComponent;

}

export default withCounter;