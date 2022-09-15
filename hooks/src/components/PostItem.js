import React from 'react'
import './PostItem.css'
import styled from 'styled-components'

const h1Styled = {
    color: 'darkblue',
    backgroundColor: 'yellow',
    padding: '5px'
}

const StyledPara = styled.p`
    color: red;
    font-size: 16px;
    font-weight: bolder;
`

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ item }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {item.id}</h1>
            <h3 style={{ color: 'darkmagenta', backgroundColor: 'lightgray' }}>
                Title: {item.title}
            </h3>
            <StyledPara>{item.body}</StyledPara>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem