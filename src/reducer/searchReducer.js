const initialList = []

const searchReducer = ( state = initialList, action) => {

    switch(action.type) {

        case 'SEARCH' : {
            return action.payload
        }

        case 'CLEAR_SEARCH' : {
            return []
        }

        case 'DELETE' : {
            
            return state.filter((ele) => {
                return ele.id != action.payload
            })
        }

        default : {
            return state
        }
    } 
}

export default searchReducer