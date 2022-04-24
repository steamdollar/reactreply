import React from 'react'

class CommentList extends React.Component  {

    items = () => this.props.list.map((v,k) => {
        return(
            <ul className='comment-row' key={k}>
                <li className='comment-id'>{v.userid}</li>
                <li className='comment-content'>
                    {v.content}
                </li>
                <li className='comment-date'>{v.date}</li>
            </ul>
        )
    })

    render() {
        return(
            <li>
                {this.items()}
            </li>
        )
    }
}

export default CommentList