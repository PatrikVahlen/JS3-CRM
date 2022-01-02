import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #0d6efd;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
`

const BigButton = styled(Button)`
  font-size: 50px;
`

export default function MyButton(props) {
    return (
        <>
            {props.big ?
                <BigButton>{props.children}</BigButton> : <Button>{props.children}</Button>
            }
        </>
    )
}
