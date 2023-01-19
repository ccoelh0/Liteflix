import styled from "styled-components"
import useWindowSize from "./hooks/useWindowSize"
import palette from "./palette"

interface ILiteflix {
  format: 'white' | 'turquoise'
}

const Liteflix = ({format}: ILiteflix) => {
  const {device} = useWindowSize()

  return format === 'white' 
    ? <White device={device}>LITEFLIX</White>
    : <Turquoise device={device}><b>LITE</b>FLIX</Turquoise>
}

export default Liteflix

const White = styled.h2<{device: 'mobile' | 'desktop'}>`
  color: ${palette.white.default};
  font-family: Bebas Neue;
  font-size: ${props => props.device === 'mobile' ? 20 : 34}px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 4px;
  text-align: left;
  font-weight: 100;
`

const Turquoise = styled.h2<{device: 'mobile' | 'desktop'}>`
  color: ${palette.turquoise.default};
  font-family: Bebas Neue Light;
  font-size: ${props => props.device === 'mobile' ? 28 : 34}px;
  line-height: 28px;
  letter-spacing: 4px;
  text-align: center;
  font-weight: 100;

  b {
    font-family: 'Bebas Neue';
  }
`

