import './Preview.css'
import { imagePath } from '../../services/constans/api'

export default function Preview({ selectedMovie }) {
    const imageLink = `${imagePath}original${selectedMovie?.backdrop_path}`

    return (
        <div
            className='preview-container'
            style={{ backgroundImage: `url(${imageLink})` }}
        >
            <div className='preview-text-container'>
                <button className='preview-btn'>Play a trailer</button>
                <div className='preview-title-container'>
                    <h2 className='preview-title'>{selectedMovie.title}</h2>
                    <p className='preview-overview'>{selectedMovie.overview}</p>
                </div>
            </div>
        </div>
    )
}
