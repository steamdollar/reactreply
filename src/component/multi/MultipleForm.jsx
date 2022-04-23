import React from 'react'

class MultipleForm extends React.Component {
    render() {
        return(
            <>
                <h2>곱셈을 계산할 숫자를 입력</h2>
                <form onSubmit = {this.props.onSubmit}>
                    <input type='number' name='multiple' placeholder='숫자 입력'/>
                    <input type='submit' value='calculate!'/>
                </form>
            </>
        )
    }
}

export default MultipleForm