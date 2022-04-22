import React, { Component } from 'react'

import './assets/style1.css' 
import './assets/style2.css'

class App extends Component {
    state = {
        value:'hellosdfsfa',
    }

    render() {
        return(
            <>
            {this.state.value}

            <div className='colors'>{this.state.value}</div>
            <div className='colorsTwo'>{this.state.value} </div>
            </>
        )
    }
}

export default App