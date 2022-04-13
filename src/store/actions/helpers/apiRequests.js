import axios from "axios";
import { topMoviesApiURL, apiKey, searchMovieApiURL } from '../../../services/constans/api'

export const fetchTopMovies = async () => {
    try {
        const { data: { results } } = await axios.get(topMoviesApiURL, {
            params: {
                api_key: apiKey
            }
        })

        return results;
    } catch (err) {
        console.log(err)
    }
}

export const searchMovies = async (text) => {
    try {
        const { data: { results } } = await axios.get(`${searchMovieApiURL}`, {
            params: {
                api_key: apiKey,
                query: text
            }
        })
        return results
    } catch (error) {
        console.log(error)
    }
}