export const FETCH_TOP_MOVIES = "FETCH_TOP_MOVIES"

export const fetchMovies = (movie) => {
    return async dispatch => {
        dispatch({ type: FETCH_TOP_MOVIES, payload: movie })
    }
}