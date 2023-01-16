import React from 'react'
import styled, {css} from 'styled-components'
import useWindowSize from '../utils/hooks/useWindowSize';
import Liteflix from '../utils/liteflix';
import BurgerMenu from './burger-menu';
import User from './user';
import Spacer from '../utils/Spacer';
import palette from '../utils/palette';

const Header = () => {
  const {device} = useWindowSize()
  const isMobile = device === 'mobile'

  const desktopMenu = (
    <Container>
      <DivFlex>
        <Liteflix format='turquoise' />
        <Spacer axis='horizontal' size={64}/>
        <Text>+ AGREGAR UNA PELICULA</Text>
      </DivFlex>
    </Container>
  )

  const mobileMenu = (
    <Container isMobile>
      <BurgerMenu/>
      <Liteflix format='turquoise' />
      <User/>
    </Container>
  )

  return isMobile ? mobileMenu : desktopMenu
}

export default Header;

const Flex = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.header<{isMobile?: boolean}>`
  ${Flex};
  padding: ${props => props.isMobile ? '1rem 1.6rem' : '35px 104px'};
  position: sticky;
  top: 0px;
`

const DivFlex = styled.div`
  ${Flex};  
`

const Text = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 4px;
  text-align: left;
  text-transform: uppercase;
  color: ${palette.white.default};
  cursor: pointer;
`