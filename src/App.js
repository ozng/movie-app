import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from './store/actions/moviesActions'

function App() {
  const data = useSelector(state => state.movies.topMovies)
  const dispatch = useDispatch()

  const movie = {
    title: "Redux action is working!"
  }

  const updateStateHandler = () => {
    dispatch(fetchMovies(movie))
  }

  return (
    <div className="App">
      <h1>{data[0].title}</h1>
      <button onClick={updateStateHandler}>Update State</button>
    </div>
  );
}

export default App;
