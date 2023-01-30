import { useEffect, useState } from 'react'
import { getMainMovie, getPopularMovies, getDataToImages } from '../context/context.service'
import { IMovieWithImage } from '../model/movie.model'

import FrontPage from './components/front-page'

const Index = () => {
  const [mainMovie, setMainMovie] = useState<IMovieWithImage>(null)
  const [movies, setMovies] = useState<IMovieWithImage[]>(null)
  const [ready, setReady] = useState(false)

  const handleImagesUrl = (url: string, logoSize: number, moviePath: string) => `${url}/${logoSize}/${moviePath}`

  const getData = async () => {
    try {
      const resImg = await getDataToImages()
      const { baseUrl, logoSize } = { baseUrl: resImg.data.images.base_url, logoSize: resImg.data.images.logo_sizes[6] }
      const resPopular = await getPopularMovies()
      const resMain = await getMainMovie()

      const popular = resPopular.data.results.slice(1, 5).map(x => {
        const path = x.backdrop_path
        const image = handleImagesUrl(baseUrl, logoSize, path)
        return { ...x, image }
      })

      const formatMain = () => {
        const movie = resMain.data.results[0]
        const path = movie.backdrop_path
        const image = handleImagesUrl(baseUrl, logoSize, path)
        return { ...movie, image }
      }

      const main = formatMain()

      setMovies(popular)
      setMainMovie(main)
      setReady(true)
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return !ready ? <>loading</> : <FrontPage movies={movies} mainMovie={mainMovie}/>
}

export default Index