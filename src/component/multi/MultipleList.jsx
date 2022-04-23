import React from 'react'

class MultipleList extends React.Component {

    list = (n) => {
        let arr = Array(9).fill(null)

        const result = arr.map( (v,k) => {
            return <li key={k}> {n} * {k+1} = {n*(k+1)} </li>
        })
    

        return (
            <ul>
                <li>{n}단입니다.</li>
                {result}
            </ul>
        )
    }

    render() {
        return(
            <>
                {this.props.value === null ? '여기에 결과가 출력됩니다..' : this.list(this.props.value) }
            </>
        )
    }
}

export default MultipleList