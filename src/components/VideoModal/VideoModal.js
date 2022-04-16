import './VideoModal.css'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { youtubeURL } from '../../services/constans/api'

export default function VideoModal({ visible, setVisible }) {
  const trailer = useSelector(state => state.movies.selectedMovieVideos)
  const filteredTrailers = trailer.filter(video => video.type === "Trailer")

  return (
    <div className='video-modal-container' style={{ ...visible }}>
      <button
        className='video-modal-btn'
        onClick={() => setVisible({
          opacity: 0,
          visibility: 'hidden'
        })}>
        Kapat
      </button>
      <ReactPlayer
        url={`${youtubeURL}${trailer.length > 0 ? filteredTrailers[0].key : "NpEaa2P7qZI"}`}
        controls={true}
      />
    </div>
  )
}
