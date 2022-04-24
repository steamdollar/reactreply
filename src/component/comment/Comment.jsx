import React from 'react'
import '../../assets/comment.css'

class Comment extends React.Component {
    render() {
           return(
               <ul className = 'comment'>
                   {this.props.children}
               </ul>
           )
    }
}

export default Comment