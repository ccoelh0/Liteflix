import { useEffect, useState } from 'react'
import styled from 'styled-components'
import palette from '../utils/palette'
import Spacer from '../utils/Spacer'
import Buttons from '../utils/buttons'
import { getMainMovie, getPopularMovies, getDataToImages } from '../context/context.service'
import { IMovieWithImage } from '../model/movie.model'
import MovieOption from './components/movie-option'
import Dropdown from './components/dropdown'

const Index = () => {
  const [mainMovie, setMainMovie] = useState<IMovieWithImage>(null)
  const [movies, setMovies] = useState<IMovieWithImage[]>(null)
  const [ready, setReady] = useState(false)

  const handleImagesUrl = (url: string, logoSize: number, moviePath: string) => `${url}/${logoSize}/${moviePath}`

  const getData = async () => {
    try {
      const resImg = await getDataToImages()
      const {baseUrl, logoSize} = {baseUrl: resImg.data.images.base_url, logoSize: resImg.data.images.logo_sizes[6]}
      const resPopular = await getPopularMovies()
      const resMain = await getMainMovie()

      const popular = resPopular.data.results.slice(1, 5).map(x => {
        const path = x.backdrop_path
        const image = handleImagesUrl(baseUrl, logoSize, path)
        return {...x, image}
      })

      const formatMain = () => {
        const movie = resMain.data.results[0]
        const path = movie.backdrop_path
        const image = handleImagesUrl(baseUrl, logoSize, path)
        return {...movie, image}
      } 

      const main = formatMain()

      setMovies(popular)
      setMainMovie(main)
      setReady(true)
    } catch(err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return !ready ? <>loading</> : (
    <section>
      <Container background={mainMovie.image}>
        <InfoMainMovie>
          <h5>ORIGINAL DE <b>LITEFLIX</b></h5>
          <Spacer axis='vertical' size={16} />
          <h4>{mainMovie?.title}</h4>

          <Spacer axis='vertical' size={16} />

          <ContainerButtons>
            <Buttons listOrPlay='play' />
            <Buttons listOrPlay='list' />
          </ContainerButtons>
        </InfoMainMovie>
      </Container>

      <Spacer axis='vertical' size={120}/>

      <OtherMovies>
        <Dropdown/>
        {movies.map((m, i) => <MovieOption key={i} movie={m}/>)}
      </OtherMovies>

      <Spacer axis='vertical' size={50}/>
    </section>
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
`

const InfoMainMovie = styled.section`
  text-align: center;
  padding: 0 32px;
  background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);

  h5 {
    color: ${palette.white.default};
    font-family: Bebas Neue Light;
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