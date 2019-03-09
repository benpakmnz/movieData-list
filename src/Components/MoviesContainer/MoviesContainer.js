import React, { Component } from 'react';
import MovieLayout from '../MovieLayout/MovieLayout';

import './MoviesContainer.scss';


class Container extends Component {


    
    render(){
        return(
                <div class="movieList">
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                    <MovieLayout/>
                </div>
        );
    }
}

export default Container;
