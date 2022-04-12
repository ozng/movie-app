import { FETCH_TOP_MOVIES } from '../actions/moviesActions'

const initialState = {
    topMovies: [],
    selectedMovie: []
}

const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_MOVIES:
            return {
                ...state,
                topMovies: action.payload
            }
        default:
            return state
    }
}

export default moviesReducers;