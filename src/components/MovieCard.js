import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteMovie } from '../actions/actionGenerators'

import MovieForm from './MovieForm'

const MovieCard = (props) => {
    const {id, name, ranking} = props

    const [toggleEdit, setToggleEdit] = useState(false)

    const dispatch = useDispatch()

    const removeMovie = (id) => {
        dispatch(deleteMovie(id))
    }

    const switchToggle = () => {
        setToggleEdit(!toggleEdit)
    }

    return(
        <div>
                <div 
                    class='card'
                    style={{
                        width: '30vh',
                        height: '32vh',
                        margin: '5px',
                        backgroundColor: '#f8f5f1',
                        fontSize: '25px',
                        color: 'black',
                    }}
                    >
                {!toggleEdit ?
                (<div class='card-body'>
                <h3 class='card-title'> {name} </h3>
                <h4 class='card-title'>{ranking}</h4>
                    <button type='button' class='btn btn-danger ' onClick={() => removeMovie(id)}>delete</button>
                    <button type='button' class='btn btn-dark' onClick={() => switchToggle()}>edit</button>
                </div>) : (
                    <MovieForm 
                        editName={name} 
                        editRanking={ranking} 
                        editId={id}
                        switchToggle={switchToggle}
                        />
                )}
            </div>
        </div>
    )
}

export default MovieCard