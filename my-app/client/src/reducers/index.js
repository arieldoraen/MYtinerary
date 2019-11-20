const initialState = {
    cities: [],
    filteredCities: [],
    filter: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "list_cities":
            return {...state, cities: [...action.payload] };
        case "filter_cities":
            return {
                ...state,
                filteredCities: [...action.payload.filteredList],
                filter: [...action.payload.filter]
            };
        default:
            return state;
    }
};

export default reducer;