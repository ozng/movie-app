import './MovieCard.css'
import { imagePath } from '../../services/constans/api'

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card-container">
            <img className='movie-card-image' alt='poster' src={`${imagePath}/w500/${movie.poster_path}`}></img>
            <p className='movie-card-title'>{movie.title}</p>
        </div>
    )
}
