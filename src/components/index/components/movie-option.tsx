import styled from "styled-components"
import { IMovieWithImage } from "../../model/movie.model"
import palette from "../../utils/palette"
import { Play } from 'react-feather'
import Spacer from "../../utils/Spacer"
import { useState } from "react"

interface IMovieOption {
  movie: IMovieWithImage
}

const MovieOption = ({ movie }: IMovieOption) => {
  const [viewMore, setViewMore] = useState<boolean>(false)

  return (
    <Container imgBackground={movie.image} onClick={() => setViewMore(prev => !prev)}>
      {!viewMore
        ? (
          <Data>
            <IconContainer viewMore={viewMore}>
              <Play />
            </IconContainer>
            <Spacer axis='vertical' size={24} />
            <Title>{movie.title}</Title>
          </Data>
        ) : (
          <MoreData>
            <section className="main">
              <IconContainer viewMore={viewMore}>
                <Play />
              </IconContainer>
              <Title>{movie.title}</Title>
            </section>

            <section className='secondary'>
              <span>{movie.vote_average}</span>
              <span>{movie.release_date.substring(0, 4)}</span>
            </section>
          </MoreData>
        )}

    </Container>
  )
}

export default MovieOption

const Container = styled.div<{ imgBackground: string }>`
  * {
    margin: 0;
  }

  width: 320px;
  height: 194px;
  border-radius: 2px;
  background-image: url(${props => props.imgBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Data = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%);
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
`

const Title = styled.h5`
  color: ${palette.white.default};
  font-size: 1rem;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 4px;
  text-align: center;
`

const IconContainer = styled.div<{ viewMore: boolean }>`
  width: ${props => !props.viewMore ? 50 : 24}px;
  height: ${props => !props.viewMore ? 50 : 24}px;
  border: 1px solid ${palette.white.default};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #24242480;

  svg {
    color: ${palette.white.default};
    width: ${props => !props.viewMore ? 24 : 12}px;
    height: ${props => !props.viewMore ? 24 : 12}px;
  }
`

const MoreData = styled.div`
  background: #242424B2;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: end;
  flex-direction: column;
  padding: 0 1.4rem;

  .main {
    display: grid;
    grid-template-columns: 15% 85%;
    align-items: center;
    margin-bottom: 27px;
    width: 100%;
  }

  .main h5 {
    text-align: left;
  }

  .secondary {
    color: ${palette.white.default};
    margin-bottom: 27px;
    font-size: 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
  }

  .secondary span {
    line-height: 12px;
    letter-spacing: 2px;
  }

  .secondary span:first-child::before{
    content: '★';
    font-size: 1rem;
    color: ${palette.turquoise.default};
    margin-right: 6px;
  } 
`