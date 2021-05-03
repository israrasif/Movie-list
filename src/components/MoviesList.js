import React from 'react'
import { useSelector} from 'react-redux'
import MovieCard from './MovieCard'
import image from './movieImage.jpg'

 
const MoviesList = (props) => {
   
    const movies = useSelector((state) => {
        return state.movies
    })

    const searched = useSelector((state) => {
        return state.searched
    })

    let data = []
    if (searched.length){
        data = [...searched]
    } else {
        data = [...movies]
    }

    return (
        <div 
            class='card margin-top' 
            style={{'height' : '73vh',
                    'margin' : '5px',
                    'backgroundImage' : `url(${image})`,
                    'color' : 'black'
            }}>
        {data.length ?
            (<div 
                class='d-flex flex-wrap overflow-auto' 
                style={{height : '75vh',
                        backdropFilter: 'blur(10px)'}}>
            {data.map((ele) => {
                return <MovieCard class='p-2 ' key={ele.id} {...ele}/>
            })}
            
            </div>) : 
            (<div
                style={{
                    height: '75vh',
                    backdropFilter: 'blur(10px)'}}>
                <h3>No Movies found</h3>
                <h4>Add your first movie</h4>
            </div>)
            }
        </div>
    )
}

export default MoviesList