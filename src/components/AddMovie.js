import React from 'react'

import MovieForm from './MovieForm'



const AddMovie = (props) => {

    return(
        <div 
            class=' card text-center margin-bottom'
            style={{'background' : '#77acf1'}}
            >
            <h3 
                class='align-middle'>Add Movie</h3>
            <MovieForm />
        </div>
    )
}

export default AddMovie