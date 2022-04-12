import axios from "axios";
import { topMoviesApiURL, apiKey } from '../../../services/constans/api'

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