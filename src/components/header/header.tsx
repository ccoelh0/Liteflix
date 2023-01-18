import styled, {css} from 'styled-components'
import useWindowSize from '../utils/hooks/useWindowSize';
import Liteflix from '../utils/liteflix';
import BurgerMenu from './burger-menu';
import User from './user';
import palette from '../utils/palette';
import { Bell as BellIcon} from 'react-feather';

const Header = () => {
  const {device} = useWindowSize()
  const isMobile = device === 'mobile'

  const desktopMenu = (
    <Container>
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