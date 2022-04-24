import React, { Component } from 'react'

import Comment from './component/comment/Comment.jsx'
import CommentForm from './component/comment/CommentForm.jsx'
import CommentList from './component/comment/CommentList.jsx' 


class App extends Component {
    state = {
        list:[]
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            list:[
                {userid: 'qwerty1', content:'hello111111', date:'2022-04-24'},
                {userid: 'qwerty2', content:'hello222222', date:'2022-04-24'},
                {userid: 'qwerty3', content:'hello333333', date:'2022-04-24'}
                
            ]
        })
    }

    addList = (content) => {
        this.setState({
            list:[...this.state.list, {userid:'qwerty4', content:content, date:'2022-04-21'}]
        })
    }

    render() {
        return(
            <>            
                <Comment>
                    <CommentForm
                    onSubmit = { (content) => {this.addList(content)} }
                    />
                    <CommentList list={this.state.list}/>
                </Comment>
            </>
        )
    }
}

export default App