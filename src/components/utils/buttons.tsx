import styled from "styled-components"
import palette from "./palette"
import {Plus, Play } from 'react-feather'

interface IButtons {
  listOrPlay: 'list' | 'play'
}

const Buttons = ({listOrPlay}: IButtons) => {
  const isList = listOrPlay === 'list'

  return (
    <Button listOrPlay={listOrPlay}>
      {isList 
      ? (
        <div>
          <Play/>
          <span>MI LISTA</span>
        </div>)
      : (
          <div>
            <Plus/>
            <span>MI LISTA</span>
          </div>
        )
      }
    </Button>)
}

const Button = styled.button<{listOrPlay: 'list' | 'play'}>`
  cursor: pointer;
  width: 248px;
  height: 56px;
  background-color: ${palette.gray.default};
  color: ${palette.white.default};
  border: ${props => props.listOrPlay === 'list' ? ' 0.5px solid white' : '0px'};

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
  }
`

export default Buttons