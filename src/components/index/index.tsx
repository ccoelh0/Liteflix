import { useContext,  useEffect , useState } from 'react'
import {  Context } from '../context/context'
import styled from 'styled-components'
import palette from '../utils/palette'
import Spacer from '../utils/Spacer'
import Buttons from '../utils/buttons'

const Index = () => {
  const [popularImage, setPopularImage] = useState<string>('')
  const { mainMovie, dataToImages } = useContext(Context)

  useEffect(() => {
    setPopularImage(`${dataToImages?.images?.base_url}/${dataToImages?.images?.logo_sizes[6]}/${mainMovie?.backdrop_path}`)
  }, [mainMovie !== undefined && dataToImages !== undefined])

  return (
    <Container background={popularImage}>
      <InfoMainMovie>
        <h5>ORIGINAL DE LITEFLIX</h5>
        <Spacer axis='vertical' size={16} />
        <h4>{mainMovie?.title}</h4>

        <Spacer axis='vertical' size={16} />

        <ContainerButtons>
          <Buttons listOrPlay='play' />
          <Buttons listOrPlay='list' />
        </ContainerButtons>
      </InfoMainMovie>
    </Container>
  )
}

export default Index

const Container = styled.section<{ background: string }>`
  background-image: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const InfoMainMovie = styled.section`
  text-align: center;
  padding: 0 32px;
  background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);
  width: 100%;

  h5 {
    color: ${palette.white.default};
    font-family: Bebas Neue;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 4px;
    margin: 0;
  }

  h4{ 
    color: ${palette.turquoise.default};
    font-size: 76px;
    font-weight: 700;
    line-height: 78px;
    letter-spacing: 12px;
    text-align: center;
    margin: 0;
  }
`

const ContainerButtons = styled.div`
  button:first-child{
    margin-bottom: 1rem;
  }

`