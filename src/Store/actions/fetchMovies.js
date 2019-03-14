import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setMovieList = (payload) => {
    const titleHandler = titleFormat(payload.Title)  
    return {
        type: actionTypes.SET_MOVIE_LIST,
        payload: {
            Title: titleHandler,
            Poster: payload.Poster,
            Year: payload.Year,
            Runtime: payload.Runtime,
            Genre: payload.Genre,
            Director: payload.Director,
            imdbID: payload.imdbID
        } 
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
            axios.get(`https://www.omdbapi.com/?t=${movieTitle}&apikey=8fb1ba1`)
            .then(res => {
                dispatch(setMovieList(res.data))           
            })
            .catch(error => console.log(error))
        })

    };
};

    export const titleFormat = (title) => {
        if (!title) {
            return;
        } else {
            let regex = /([a-z]|\s)/i
            let formattedTitle = title.toLowerCase()
                                    .split('')
                                    .filter(char => regex.test(char))
                                    .join('')
                                    .split(' ')
                                    .map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
            return formattedTitle;
        }
    }


export const editMovieSubmit = (payload) => {
    const titleHandler = titleFormat(payload.Title)
    return{
    type: actionTypes.EDIT_MOVIE_SUBMIT,
    payload: {
        Title: titleHandler,
        Poster: payload.Poster,
        Year: payload.Year,
        Runtime: payload.Runtime,
        Genre: payload.Genre,
        Director: payload.Director,
        imdbID: payload.imdbID
    }
    }
};


export const addMovieSubmit = (payload) => {
    const titleHandler = titleFormat(payload.Title)
    return{
        type: actionTypes.ADD_MOVIE_SUBMIT,
        payload: {
            Title: titleHandler,
            Poster: payload.Poster,
            Year: payload.Year,
            Runtime: payload.Runtime,
            Genre: payload.Genre,
            Director: payload.Director,
            imdbID: payload.imdbID
        }
    }
}

export const deleteMovie = (payload) => {
    return{
        type: actionTypes.DELETE_MOVIE,
        payload
    }
}


