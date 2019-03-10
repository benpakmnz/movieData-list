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
        case actionTypes.FORM_SUBMIT:
            return {
                ...state,
                moviesDataList: state.moviesDataList.map(movie => {
                    if (movie.imdbID === action.movieData.imdbID){
                        return action.movieData
                    }else{ 
                        return movie
                    }
                })
            }
        case actionTypes.DELETE_MOVIE:
            return {
                ...state,
                moviesDataList: state.moviesDataList.filter(movie => {
                    return movie.imdbID !== action.movieIdToDelete
                })
            }
        default:
            return state;
        };
};


export default fetchMoviesReducer;