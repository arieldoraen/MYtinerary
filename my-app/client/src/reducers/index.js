const initialState = {
    cities: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'list_cities':
            return {...state, cities: [...action.payload]}
        default : return state
    }
}

export default reducer