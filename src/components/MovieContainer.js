import React from 'react'
import AddMovie from './AddMovie'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'
import SearchBar from './SearchBar'
import SortMovies from './sortMovies'


const MovieContainer = (props) => {

    return (
        <div>
            <h1 
                class='text-center'
                style={{'color' : '#c0fefc'}}>Movie List App</h1>
            <div class='container-fluid'>
                <div class='row justify-items-end'>
                    <div class='col-sm-8'>
                        <div class='row'>
                            <div class='col-lg-9 col-12'><SearchBar/> </div>
                            <div class='col-lg-3 col-12'><SortMovies/></div>
                        </div>
                        <div><MoviesList/></div>
                    </div>
                    <div class='col-sm-4'>
                        <div 
                            class='row' 
                            style={{
                                height: '43vh',
                                marginBottom: '5px'
                                }}
                            >
                            <AddMovie/>
                        </div>
                        <div class='row' style={{height: '42vh'}}>
                            <MovieStats/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieContainer