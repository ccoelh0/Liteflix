import axios, {AxiosResponse} from "axios"
import { IMovie } from "../model/movie.model"

const mainMovie = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'
const popularMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20'
const dataToImages = 'https://api.themoviedb.org/3/configuration?api_key=6f26fd536dd6192ec8a57e94141f8b20'

const getMainMovie = (): Promise<AxiosResponse<{results: IMovie}>> => axios.get(mainMovie)
const getPopularMovies = (): Promise<AxiosResponse<{results: IMovie[]}>> => axios.get(popularMovies)
const getDataToImages = (): Promise<AxiosResponse<{images: {base_url: string, logo_sizes: number[]}}>> => axios.get(dataToImages)

export {getMainMovie, getPopularMovies, getDataToImages}