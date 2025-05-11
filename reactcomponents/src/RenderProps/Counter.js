

import { Component } from 'react'

export class Counter extends Component {
    state = {
            count: 0
        }

        increament = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }))
        }


        render(){
            const {count}= this.state
            const {render}=this.props

            return render(count, this.increament)
        }
}

export default Counter
