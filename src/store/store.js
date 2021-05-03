import {createStore, combineReducers} from 'redux'
import moviesReducer from '../reducer/configureReducer'
import searchReducer from '../reducer/searchReducer'

const configureStore = () => {

    const store = createStore(combineReducers({
        movies: moviesReducer,
        searched: searchReducer 
    }))

    return store
} 

export default configureStore