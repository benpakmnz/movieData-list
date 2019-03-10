import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/actions/index';



import './MoviesContainer.scss';
import MovieLayout from '../MovieLayout/MovieLayout';


class Container extends Component {

    componentDidMount() {
        this.props.setMovieList()
    }
    

    render(){
        console.log(this.props.moviesList)
        const moviesList = this.props.moviesList
        .map(movie => <MovieLayout key={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} runtime={movie.Runtime} genre={movie.Genre} director={movie.Director}/>);

        return(
            <div className="movieList">
                {moviesList}
            </div>
        );
    }
}

    const mapStateToProps = state => {
        return {
            moviesList: state.moviesList.moviesDataList  
        };
    };

    const mapDispatchToProps = dispatch => {
        return{
            setMovieList: () => dispatch(actionCreators.initMovies()),
        }
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Container);
