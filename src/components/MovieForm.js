import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addMovie, editMovie} from '../actions/actionGenerators'


const MovieForm  = (props) => {
    const {editName, editRanking, editId, switchToggle} = props

    const [name, setName] = useState(editName ? editName : '')
    const [ranking, setRanking] = useState(editRanking ? editRanking : '')
    const [id, setId] = useState(editId ? editId : Number(new Date()))

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const movie = {
            id: id,
            name: name, 
            ranking: Number(ranking)
        }

        if(!editName) {
            dispatch(addMovie(movie))
        } else {
            dispatch(editMovie(movie))
            switchToggle()
        }

        console.log(movie)
        setName('')
        setRanking('')
    }

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value)
        } else if (e.target.name === 'ranking') {
            setRanking(e.target.value)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input  class=' form-control' type='text' value={name} onChange={handleChange} name='name' placeholder='Movie Name'/> <br />
            <input  class=' form-control' type='text' value={ranking} onChange={handleChange} name='ranking' placeholder='IMDB Ranking'/> <br />
            <button 
                class='btn btn-dark'
                type='submit'>Save</button>
        </form>
    )
}

export default MovieForm