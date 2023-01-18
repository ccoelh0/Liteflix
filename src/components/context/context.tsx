import {createContext, useEffect, useState} from 'react'
import { ReactNode } from 'react';
import { IMovie } from '../model/movie.model';
import { getPopularMovies, getMainMovie, getDataToImagaes } from './context.service';

export interface IContext {
  movies: any[]
  mainMovie: any
  dataToImages: any
}

const initial = {
  movies: [],
  mainMovie: undefined,
  dataToImages: undefined
}

export const Context = createContext(initial);

const Provider = ({children}: {children: ReactNode}) => {
  const [mainMovie, setMainMovie] = useState<IMovie>()
  const [movies, setMovies] = useState<IMovie[]>([])
  const [dataToImages, setDataToImages] = useState()

  useEffect(() => {
    getPopularMovies()
      .then((res) => setMovies(res.data.results))
      .catch(err => console.log(err))

    getMainMovie()
      .then(res => setMainMovie(res.data.results[0]))
      .catch(err => console.log(err))

    getDataToImagaes()
      .then(res => setDataToImages(res.data))
      .catch(err => console.log(err))
  }, [])

  return <Context.Provider value={{movies, mainMovie, dataToImages}}>{children}</Context.Provider>
}

export default Provider