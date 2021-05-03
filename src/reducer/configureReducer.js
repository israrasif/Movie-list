const initialList = []

const moviesReducer = ( state = initialList, action) => {
    switch(action.type) {

        case 'ADD_MOVIE' : {
            return [...state, {...action.payload}]
        }

        case 'A_Z' : {
            return action.payload
        }

        case 'Z_A' : {
            return action.payload
        }

        case 'NUM_ASC' : {
            return action.payload
        }

        case 'NUM_DSC' : {
            return action.payload
        }

        case 'DELETE' : {
            return state.filter((ele) => {
                return action.payload != ele.id
            })
        }

        case 'UPDATE' : {
            return state.map((ele) => {
                if(ele.id === action.payload.id){
                    return {...ele, ...action.payload}
                } else {
                    return {...ele}
                }
            })
        }

        default : {
            return state
        }
    }
}

export default moviesReducer