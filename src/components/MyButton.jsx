import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #0d6efd;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
`

export default function MyButton(props) {
    return (
        <>
            <Button>{props.children}</Button>
        </>
    )
}
