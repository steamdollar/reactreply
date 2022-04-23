import React, { Component } from 'react'

import './assets/style1.css' 
import './assets/style2.css'

import style3 from './assets/colorThree.module.css'
import style4 from './assets/colorFour.module.css'

import styled from 'styled-components'

const Button = styled.button `
    background: #000;
    border:none;
    color:#fff;
    padding: 7px 14px;
`

const HoverButton = styled(Button) `
    background: #007bff;
    :hover {
        background: #0069d9;
    }
`

const ActiveButton = styled(Button) `
    background: ${(props) => props.background};
    display: ${(props) => {
        let flag
        if (props.background === '#333') { flag = 'block'}
        return flag
    }};
`


class App extends Component {
    state = {
        value:'We are doing Styling',
    }

    render() {
        return(
            <>
            
                {this.state.value}
                <div className={style4.borderOne}>

                    <div className='colors'>{this.state.value}</div>
                    <div className='colorsTwo'>{this.state.value} </div>

                    <div className={style3.colorsThree}>{this.state.value}</div>
                    <div className={style4.colorsFour}>{this.state.value}</div>
                    <div className={style4.colorsFive}>{this.state.value}</div>

                </div>

                <div className={style4.borderOne}>
                    <Button> styled component </Button>
                    <HoverButton> styled Component2 </HoverButton>
                    <ActiveButton background ='#333'> variable in css </ActiveButton>
                </div>
            </>
        )
    }
}

export default App