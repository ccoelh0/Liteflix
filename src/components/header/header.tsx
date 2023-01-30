import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import useWindowSize from '../utils/hooks/useWindowSize';
import Liteflix from '../utils/liteflix';
import BurgerMenu from './burger-menu';
import User from './user';
import palette from '../utils/palette';
import { Bell as BellIcon } from 'react-feather';
import Menu from './menu';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  console.log(scrollPosition)

  const { device } = useWindowSize()

  const isMobile = device === 'mobile'

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])


  return (
    <>
      <Container isMobile isOpen={open} scrollPosition={scrollPosition}>
        <section>
          {isMobile ? (
            <>
              <BurgerMenu open={open} setOpen={setOpen} />
              <Liteflix format='turquoise' />
              <User />
            </>
          ) : (
            <>
              {!open &&
                <DivFlex gap={64}>
                  <Liteflix format='turquoise' />

                  <Text>+ AGREGAR PELICULA</Text>
                </DivFlex>
              }

              <DivFlex gap={40} isOpen={open}>
                <BurgerMenu open={open} setOpen={setOpen} />

                <DivFlex gap={20}>
                  <BellContainer>
                    <Bell />
                  </BellContainer>

                  <User />
                </DivFlex>
              </DivFlex>
            </>
          )}
        </section>

        {open && <Menu />}
      </Container>
    </>
  )
}

export default Header;

const Flex = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ScrollStyles = (scroll: number) => {
  if (scroll >= 0 && scroll < 50) return 'transparent'
  if (scroll >= 50 && scroll < 100) return '#2424241c'
  if (scroll >= 100 && scroll < 150) return '#24242452'
  if (scroll >= 150 && scroll < 200) return '#2424248d'
  if (scroll >= 200 && scroll < 250) return '#242424c1'
  if (scroll >= 250 && scroll < 300) return '#242424d6'
  return palette.gray.default
}


const Container = styled.header<{ isMobile?: boolean, isOpen: boolean, scrollPosition: number }>` 
  position: fixed;
  top: 0;
  width: 100%;

  background: ${props => {
    if (props.isOpen) return palette.gray.default
    return ScrollStyles(props.scrollPosition);
  }};

  section {
    ${Flex}
    padding: ${props => props.isMobile ? '1rem 1.6rem' : '35px 104px'};
  }
`

const DivFlex = styled.div<{ gap: number, isOpen?: boolean }>`
  ${Flex};  
  gap: ${props => props.gap && props.gap}px;
  ${props => props.isOpen && 'width: 100%;'}
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