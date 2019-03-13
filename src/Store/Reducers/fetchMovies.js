import * as actionTypes from '../actions/actionTypes';

const initialState = {
    moviesDataList : [],
};


const fetchMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIE_LIST:
            return ({
                ...state,
                moviesDataList: [action.payload, ...state.moviesDataList]
            })
        case actionTypes.EDIT_MOVIE_SUBMIT:
            return {
                ...state,
                moviesDataList: state.moviesDataList.map(movie => {
                    if (movie.imdbID === action.payload.imdbID){
                        return action.payload
                    }else{ 
                        return movie
                    }
                })
            }
        case actionTypes.ADD_MOVIE_SUBMIT:
            return {
                ...state,
                moviesDataList: [action.payload, ...state.moviesDataList]

            }
        case actionTypes.DELETE_MOVIE:
            return {
                ...state,
                moviesDataList: state.moviesDataList.filter(movie => {
                return movie.imdbID !== action.payload
                })
            }
        default:
            return state;
        };
};


export default fetchMoviesReducer;