import { fetchTopMovies } from './helpers/apiRequests'

export const FETCH_TOP_MOVIES = "FETCH_TOP_MOVIES"

export const fetchMovies = () => {
    return async dispatch => {
        const movie = await fetchTopMovies()

        dispatch({ type: FETCH_TOP_MOVIES, payload: movie })
    }
}