import { IMovieWithImage } from "../../model/movie.model";
import styled, { css } from 'styled-components'
import palette from '../../utils/palette'
import Spacer from '../../utils/Spacer'
import Buttons from '../../utils/buttons'
import Dropdown from "./dropdown";
import MovieOption from "./movie-option";
import useWindowSize from "../../utils/hooks/useWindowSize";

interface IFrontPage {
  mainMovie: IMovieWithImage;
  movies: IMovieWithImage[]
}

const FrontPage = ({ mainMovie, movies }: IFrontPage) => {
  const {device} = useWindowSize()
  const isMobile = device === 'mobile'
 
  return (
    <Container isDesktop={!isMobile}>
      <ContainerImage background={mainMovie.image}>
        <InfoMainMovie isMobile={isMobile}>
          <h5>ORIGINAL DE <b>LITEFLIX</b></h5>
          <Spacer axis='vertical' size={16} />
          <h4>{mainMovie?.title}</h4>

          <Spacer axis='vertical' size={16} />
          
          <ContainerButtons>
            <Buttons listOrPlay='play' />
            <Buttons listOrPlay='list' />
          </ContainerButtons>
        </InfoMainMovie>
      </ContainerImage>

      <Spacer axis='vertical' size={120} />

      <OtherMovies>
        <Dropdown />

        {movies.map((m, i) => <MovieOption key={i} movie={m} />)}
      </OtherMovies>

      <Spacer axis='vertical' size={50} />
    </Container>
  )
}

export default FrontPage;

// isMobile e isDesktop => manejarlo con mediaquerys

const ImageFormat = css`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`

const Container = styled.section<{isDesktop: boolean}>`
  /* ${props => props.isDesktop && 'background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);'} */
  
`

const ContainerImage = styled.section<{ background: string}>`
  background-image: url(${props => props.background});
  ${ImageFormat};
  display: flex;
  align-items: flex-end;
`

const InfoMainMovie = styled.section<{isMobile: boolean}>`
  text-align: center;
  padding: 0 32px;
  
  ${props => props.isMobile && 'background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);'};

  h5 {
    color: ${palette.white.default};
    font-family: 'Bebas Neue Light';
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 4px;
    margin: 0;
  }

  h5 b {
    font-family: Bebas Neue;
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

const OtherMovies = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`