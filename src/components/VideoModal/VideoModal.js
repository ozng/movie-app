import './VideoModal.css'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { youtubeURL } from '../../services/constans/api'

export default function VideoModal({ visible, setVisible }) {
  const trailer = useSelector(state => state.movies.selectedMovieVideos)
  return (
    <div className='video-modal-container' style={{ ...visible }}>
      <ReactPlayer
        url={`${youtubeURL}${trailer.length > 0 ? trailer[0].key : "NpEaa2P7qZI"}`}
        controls={true}
      />
      <button
        className='video-modal-btn'
        onClick={() => setVisible({
          opacity: 0,
          visibility: 'hidden'
        })}>
        Kapat
      </button>
    </div>
  )
}
