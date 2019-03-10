import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setMovieList = (movieList) => {
    return {
        type: actionTypes.SET_MOVIELIST,
        moviesDataList: movieList
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

export const movieFormSubmit = (movie) => {
    return{
    type: actionTypes.FORM_SUBMIT,
    movieData: movie
    }
};

export const deleteMovie = (movieId) => {
    return{
        type: actionTypes.DELETE_MOVIE,
        movieIdToDelete: movieId
    }
}


