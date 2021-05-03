export const addMovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

export const searchMovie = (movies) => {
    return {
        type: 'SEARCH',
        payload: movies
    }
}

export const clearSearch = () => {
    return {
        type: 'CLEAR_SEARCH'
    }
}

export const az = (sortedaz) => {
    return {
        type: 'A_Z',
        payload: sortedaz
    }
}

export const za = (sortedza) => {
    return {
        type: 'Z_A',
        payload: sortedza
    }
}

export const numAsc = (sortedNumA) => {
    return {
        type: 'NUM_ASC',
        payload: sortedNumA
    }
}

export const numDsc = (sortedNumB) => {
    return {
        type: 'NUM_DSC',
        payload: sortedNumB
    }
}

export const deleteMovie = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}

export const editMovie = (id) => {
    return {
        type: 'UPDATE',
        payload: id
    }
}