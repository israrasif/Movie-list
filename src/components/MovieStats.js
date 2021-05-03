import React from 'react'
import { useSelector } from 'react-redux'
 

const MovieStats = (props) => {

    const movies = useSelector((state) => {
        return state.movies
    })

    let topRanked = 0
    let topMovie = {}

    movies.forEach((ele) => {
        if (!topRanked) {
            topRanked = ele.ranking
            topMovie = ele
        } else if(topRanked > ele.ranking){
            topRanked = ele.ranking
            topMovie = ele
        }
    })

    return (
        <div 
            class='card d-flex align-items-center'
            style={{'background' : '#77acf1'}}
            >
            <h3>Movie Stats</h3>
            <h4>Total Movies - {movies.length}</h4>
            <h4>Top Ranked Movie - {topMovie.name && topMovie.name}</h4>

        </div>
    )
}

export default MovieStats