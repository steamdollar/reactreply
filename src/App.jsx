import React, { Component } from 'react'

class App extends Component {
    state = {
        value:'hellosdfsfa',
    }

    render() {
        return(
            <>
            {this.state.value}
            </>
        )
    }
}

export default App