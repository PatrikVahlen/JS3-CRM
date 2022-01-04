import React from 'react'
import styled, { css } from "styled-components"

const StyledContainer = styled.div`
max-width: 500px;
color: white;
border-radius: 30px;
border: 5px solid;
borderColor: white;
text-align: center;
margin: 10px;
`

export default function Card(props) {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}