import * as actionTypes from '../actions/actionTypes';

const initialState = {
    moviesDataList : []
};


const fetchMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIELIST:
            return {
                ...state,
                moviesDataList: [action.moviesDataList, ...state.moviesDataList]
            }
        default:
            return state;
        };
};

export default fetchMoviesReducer;