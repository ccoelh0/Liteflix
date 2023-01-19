import styled, {css} from 'styled-components'
import useWindowSize from '../utils/hooks/useWindowSize';
import Liteflix from '../utils/liteflix';
import BurgerMenu from './burger-menu';
import User from './user';
import palette from '../utils/palette';
import { Bell as BellIcon} from 'react-feather';
import { useState, useEffect } from 'react';

const Header = () => {

  const {device} = useWindowSize()
  const isMobile = device === 'mobile'

  const [scrollPosition, setScrollPosition] = useState<number>(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  const scroll = scrollPosition > 65


  const desktopMenu = (
    <Container isScrolled={scroll}>
      <section>
        <DivFlex gap={64}>
          <Liteflix format='turquoise' />

          <Text>+ AGREGAR PELICULA</Text>
        </DivFlex>

        <DivFlex gap={40}>
          <BurgerMenu/>

          <BellContainer>
            <Bell/>
          </BellContainer>

          <User/>
        </DivFlex>
      </section>
    </Container>
  )

  const mobileMenu = (
    <Container isMobile isScrolled={scroll}>
      <section>
        <BurgerMenu/>
        <Liteflix format='turquoise' />
        <User/>
      </section>
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

const ScrollStyles = css`
  @keyframes change-color {
  0% {
    background: #2424241c;    
  }
  25% {
    background: #24242452;    
  }
  50% {
    background: #2424248d;      
  }
  75% {
    background: #242424c1;      
  }
  100% {
    background: #242424d6;       
  }
}
  background: ${palette.gray.default};
  animation: change-color 0.2s;
`

const Container = styled.header<{isMobile?: boolean, isScrolled: boolean}>` 
  position: fixed;
  top: 0;
  width: 100%;

  ${props => !props.isScrolled ? 'background: linear-gradient(0deg, rgba(36, 36, 36, 0) 0%, #0000006c 100%);': ScrollStyles}

  section {
    ${Flex}
    padding: ${props => props.isMobile ? '1rem 1.6rem' : '35px 104px'};
  }
`

const DivFlex = styled.div<{gap: number}>`
  ${Flex};  
  gap: ${props => props.gap && props.gap}px;
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

const BellContainer = styled.div`
  cursor: pointer;

  &::after{
    content: '•';
    color: ${palette.turquoise.default};
    font-size: 40px;
    position: relative;
    top: -5px; 
    left: -11px;
  }
`

const Bell = styled(BellIcon)`
  color: ${palette.white.default};
`