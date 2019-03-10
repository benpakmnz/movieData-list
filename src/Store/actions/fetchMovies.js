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
            "se7en",
            "The Silence of the Lambs",
            "The Game",
            "The Whole Nine Yards",
            "The Experiment",
            "The Girl with the Dragon Tattoo",
            "Ice Age",
            "House",
            "The Green Mile",
            "American History X",
            "Breaking Bad",
            "Limitless",
            "Braveheart",
            "The Shawshank Redemption",
            "Unthinkable",
            "Pulp Fiction",
            "The Dictator",
            "Django Unchained",
            "Crazy, Stupid, Love.",
            "Hard Candy"
        ]
    return dispatch => {
        moviesInitialList.forEach(movieTitle => {
            axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=8fb1ba1`)
            .then(res => {
                dispatch(setMovieList(res.data))           
            })
        })

    };
};


