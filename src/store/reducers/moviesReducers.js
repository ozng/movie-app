import { FETCH_TOP_MOVIES } from '../actions/moviesActions'

const initialState = {
    topMovies: [
        {
            title: "Hello, this is Redux!"
        }
    ]
}

const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_MOVIES:
            const updatedState = [action.payload]
            return {
                ...state,
                topMovies: updatedState
            }
        default:
            return state
    }
}

export default moviesReducers;