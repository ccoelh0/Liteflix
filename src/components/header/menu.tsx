import styled from "styled-components"
import useWindowSize from "../utils/hooks/useWindowSize"
import palette from "../utils/palette"

const Menu = () => {
  const { device } = useWindowSize()
  const isDesktop = device === 'desktop'

  const options = ["INICIO", "SERIES", "PELÍCULAS", "AGREGADAS RECIENTEMENTE", " POPULARES", "MIS PELICULAS", "MI LISTA", "+ AGREGAR UNA PELÍCULA", "CERRAR SESIÓN"]

  return (
    <Container>
      {options.map((op, i) => {
        const active = op === '+ AGREGAR UNA PELÍCULA'
        return <Option key={i} isActive={active}>{op}</Option>}
      )}
    </Container>
  )
}

export default Menu

const Container = styled.div`
  background-color: ${palette.gray.default};
  color: ${palette.white.default};
  height: 100vh;
  width: 100%;
  position: absolute;
  padding: 60px 0 0 24px;
`

const Option = styled.span<{isActive: boolean}>`
  font-family: Bebas Neue Light;
  font-size: 16px;
  font-weight: ${props => props.isActive ? 900 : 400};
  line-height: 16px;
  letter-spacing: 4px;
  text-align: left;
  display: block;
  margin: ${props => props.isActive ? '65px 0' : '0 0 40px 0'};
  cursor: pointer;

  &:hover {
    font-weight: 900;
  }
`