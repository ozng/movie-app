import {
    fetchTopMovies,
    searchMovies as searchMoviesHandler,
    fetchVideos as fetchVideosHandler
} from './helpers/apiRequests'

import { upToTop } from '../../services/actions/documentActions'

export const FETCH_TOP_MOVIES = "FETCH_TOP_MOVIES"
export const SET_SELECTED_MOVIES = "SET_SELECTED_MOVIES"
export const SEARCH_MOVIES = "SEARCH_MOVIES"
export const RESET_SEARCH = "RESET_SEARCH"
export const FETCH_VIDEOS = "FETCH_VIDEOS"

export const fetchMovies = () => {
    return async dispatch => {
        const movie = await fetchTopMovies()
        dispatch({ type: FETCH_TOP_MOVIES, payload: movie })
    }
}

export const setSelectedMovie = (movie) => {
    return async dispatch => {
        upToTop()
        dispatch({ type: SET_SELECTED_MOVIES, payload: movie })
    }
}

export const searchMovies = (text) => {
    return async dispatch => {
        const searchResults = await searchMoviesHandler(text)
        dispatch({ type: SEARCH_MOVIES, payload: searchResults })
    }
}

export const resetSearch = () => {
    return async dispatch => {
        dispatch({ type: RESET_SEARCH })
    }
}

export const fetchVideos = (id) => {
    return async dispatch => {
        const videoResults = await fetchVideosHandler(id)
        dispatch({ type: FETCH_VIDEOS, payload: videoResults })
    }
}
