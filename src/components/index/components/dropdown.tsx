import styled from "styled-components"
import { ChevronDown, Check } from "react-feather"
import { useState } from "react"
import palette from "../../utils/palette"

type option = 'POPULARES' | 'MIS PELICULAS'

const Dropdown = () => {
  const [select, setSelect] = useState<option>('POPULARES')
  const [open, setOpen] = useState<boolean>(false)

  const popular = select === 'POPULARES'
  const myMovies = select === 'MIS PELICULAS' 

  return (
    <div>
      <Visible onClick={() => setOpen(prev => !prev)}>
        <p>VER: <span>{select}</span> <ChevronDown /></p>
      </Visible>

      {open && (
        <Drop>
          <DropText isSelected={popular} onClick={() => setSelect('POPULARES')}>
            <span>POPULARES</span>
            {popular && <CheckIcon/>}
          </DropText>

          <DropText isSelected={myMovies} onClick={() => setSelect('MIS PELICULAS')}>
            <span>MIS PELICULAS</span>
            {myMovies && <CheckIcon/>}
          </DropText>
        </Drop>
      )}
    </div>
  )
}

export default Dropdown

const Visible = styled.div`
  font-family: 'Bebas Neue Light';
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 4px;
  text-align: center;
  color: ${palette.white.default};
  position: relative;

  p {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  span {
    font-weight: 900;
    font-family: Bebas Neue;
  }
`

const Drop = styled.div`
  min-width: 310px;
  width: 370px;
  height: 112px;
  background-color: ${palette.gray.default};
  position: absolute;
  left: -105px;
  border: 1px solid #ffffff71;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

const DropText = styled.div<{ isSelected: boolean }>`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 4px;
  text-align: left;
  color: ${palette.white.default};
  padding: 0 24px;
  font-family: ${props => props.isSelected ? 'Bebas Neue' : 'Bebas Neue Light'};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CheckIcon = styled(Check)`
  color: ${palette.white.default};
  width: 1.2rem;
`