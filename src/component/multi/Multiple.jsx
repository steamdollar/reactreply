import React from 'react'

import MultipleForm from './MultipleForm.jsx'
import MultipleList from './MultipleList.jsx'

class Multiple extends React.Component {

    state = {
        value:null
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            ...this.state,
            value:parseInt(e.target.multiple.value)
        })
    }
    
    render() {
        return(
            <>
                <MultipleForm
                    onSubmit={this.handleSubmit}
                />
                <MultipleList
                    value={this.state.value}
                />
            </>
        )
    }
}

export default Multiple