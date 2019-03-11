import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setMovieList = (payload) => {
    return {
        type: actionTypes.SET_MOVIE_LIST,
        payload
    }
}

export const initMovies = () => {
    let moviesInitialList = [
            "up",
            "suits",
            "casa+de+papel",
            "friends",
            "orange+is+the+new+black",
            "prison+break",
            "Breaking+Bad",
            "young+sheldon",
            "unreal"
        ]

        return dispatch => {
        moviesInitialList.forEach(movieTitle => {
            axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=8fb1ba1`)
            .then(res => {
                dispatch(setMovieList(res.data))           
            })
            .catch(error => console.log(error))
        })

    };
};

export const editMovieSubmit = (payload) => {
    return{
    type: actionTypes.EDIT_MOVIE_SUBMIT,
    payload
    }
};


export const addMovieSubmit = (payload) => {
    return{
        type: actionTypes.ADD_MOVIE_SUBMIT,
        payload
    }
}

export const deleteMovie = (payload) => {
    return{
        type: actionTypes.DELETE_MOVIE,
        payload
    }
}


