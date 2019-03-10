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
            "young+sheldon"
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


