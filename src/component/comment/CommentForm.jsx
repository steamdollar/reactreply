import React from 'react'

class CommentForm extends React.Component {

    state = {
        value:''
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            value:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.value)

        this.props.onSubmit(this.state.value)
        
        this.setState({
            value:''
        })
    }

    render() {
        return(
            <li className='comment-form'>
                <form onSubmit={this.handleSubmit}>
                    <span className='ps_box'>
                        <input type='text' className='int' placeholder='write comment' 
                        onChange={this.handleChange}
                        value={this.state.value}
                        />        
                    </span>
                    <input type='submit' className='btn' value='submit'/>
                </form>
            </li>
        )
    }
}

export default CommentForm