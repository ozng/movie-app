import './App.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from './store/actions/moviesActions'
import MovieCard from './components/MovieCard/MovieCard'
import Header from './components/Header/Header'
import Preview from './components/Preview/Preview'

function App() {
  const movies = useSelector(state => state.movies.topMovies)
  const searchedMovies = useSelector(state => state.movies.searchedMovies)
  const selectedMovie = useSelector(state => state.movies.selectedMovie)
  const [data, setData] = useState(movies)
  const dispatch = useDispatch()

  console.log(data)

  useEffect(() => {
    setData(searchedMovies.length > 0 ? searchedMovies : movies)
  }, [searchedMovies, movies])

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Preview selectedMovie={selectedMovie} />
      </div>
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
