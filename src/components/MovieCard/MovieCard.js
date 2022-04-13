import './MovieCard.css'
import { imagePath } from '../../services/constans/api'
import { useDispatch } from 'react-redux'
import { setSelectedMovie } from '../../store/actions/moviesActions'

export default function MovieCard({ movie }) {
    const dispatch = useDispatch();

    return (
        <div className="movie-card-container" onClick={() => dispatch(setSelectedMovie(movie))}>
            <img className='movie-card-image' alt='poster' src={`${imagePath}/w500/${movie.poster_path}`}></img>
            <p className='movie-card-title'>{movie.title}</p>
        </div>
    )
}
