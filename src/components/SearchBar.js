import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { searchMovie, clearSearch } from '../actions/actionGenerators'

const SearchBar = (props) => {
    const dispatch = useDispatch()
    const [movieName, setMovieName] = useState('')

    const movies = useSelector((state) => {
        return state.movies
    })

    const searched = useSelector((state) => {
        return state.searched
    })

    const handleChange = (e) => {
        setMovieName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const filtered = movies.filter((ele) => {
            return ele.name.includes(movieName)
        })
        dispatch(searchMovie(filtered))
        setMovieName('')
    }

    const closeSearch = () => {
        dispatch(clearSearch())
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                class='form-control'
                style={{width: '100%'}}
                type='text' 
                value={movieName} 
                onChange={handleChange}
                placeholder='search by movie name'
                />
            {searched.length !==0 && 
            <button 
                class='btn btn-danger'
                onClick={closeSearch}>
                    close search results
                </button>}
        </form>
    )
}

export default SearchBar