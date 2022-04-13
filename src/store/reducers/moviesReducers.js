import { FETCH_TOP_MOVIES, RESET_SEARCH, SEARCH_MOVIES, SET_SELECTED_MOVIES } from '../actions/moviesActions'

const initialState = {
    topMovies: [],
    selectedMovie: [],
    searchedMovies: []
}

const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_MOVIES:
            return {
                ...state,
                topMovies: action.payload,
                selectedMovie: action.payload[0],
                searchedMovies: action.payload
            }
        case SET_SELECTED_MOVIES:
            return {
                ...state,
                selectedMovie: action.payload
            }
        case SEARCH_MOVIES:
            return {
                ...state,
                selectedMovie: action.payload[0],
                searchedMovies: action.payload
            }
        case RESET_SEARCH:
            return {
                ...state,
                selectedMovie: state.topMovies[0],
                searchedMovies: []
            }
        default:
            return state
    }
}

export default moviesReducers;