import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from './store/actions/moviesActions'
import MovieCard from './components/MovieCard/MovieCard'

function App() {
  const data = useSelector(state => state.movies.topMovies)
  const dispatch = useDispatch()
  console.log(data)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <div className="App">
      <div className='card-list-container center'>
        {
          data.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
