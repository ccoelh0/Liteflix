import { useState } from 'react'
import styled, { css } from 'styled-components'
import useWindowSize from '../utils/hooks/useWindowSize'
import palette from '../utils/palette'

const BurgerMenu = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { device } = useWindowSize()
  const isDesktop = device === 'desktop'

  return (
    <Container onClick={() => setOpen(prev => !prev)} isOpen={open}>
      <Line isShort={isDesktop} />
      <Line />
      <Line isShort={!isDesktop} />
    </Container>
  )
}

export default BurgerMenu;

const Container = styled.div<{ isOpen: boolean }>`
  width: 27px;
  height: 1rem;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2) {
    top: 6px;
  }

  span:nth-child(3) {
    top: 12px;
  }

  ${props => props.isOpen && Effects}; 

  @media (min-width: 1020px) {
    transform: rotate(180deg);
  }
`

const Line = styled.span <{ isShort?: boolean }>`
    display: block;
    position: absolute;
    height: 1px;
    width: ${props => props.isShort ? 60 : 100}%;
    background: ${palette.white.default};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
`

const Effects = css`
  span:nth-child(1) {
    top: 6px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  span:nth-child(2) {
    top: 6px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  span:nth-child(3) {
    opacity: 6px;
    left: -60px;
  }

  @media(min-width: 1020px) {
    span:nth-child(1) {
      background-color: transparent;
      left: -60px;
    }
   
    span:nth-child(2) {
      top: 6px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }

    span:nth-child(3) {
      top: 6px;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
      left: 0;

    }

  }
`