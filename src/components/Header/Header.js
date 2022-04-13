import './Header.css'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovies, resetSearch } from '../../store/actions/moviesActions'

export default function Header() {
    const inputRef = useRef()
    const dispatch = useDispatch()

    const searchHandler = (e) => {
        e.preventDefault()
        dispatch(searchMovies(inputRef.current.value))
        inputRef.current.value = ""
    }

    const logoClickHandler = () => {
        dispatch(resetSearch())
    }

    return (
        <div className='header-container'>
            <h1 onClick={logoClickHandler} className='header-title'>Movie App</h1>
            <form className='header-input-container' onSubmit={searchHandler}>
                <input ref={inputRef} className='header-input' placeholder='Find a movie' />
                <button type='submit' className='header-btn'>
                    Search
                </button>
            </form>
        </div>
    )
}
