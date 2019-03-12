import React, { Component } from 'react';
import './MovieLayout.scss';
import MovieButtons from './MovieButtons/MovieButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MovieLayout extends Component {
    handleMouseHover = this.handleMouseHover.bind(this);
    state = {
        isHovering: false,
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
    toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }

    render() {
        let regex = /([a-z]|\s)/i
        let formattedTitle = this.props.title.toLowerCase()
                                .split('')
                                .filter(char => regex.test(char))
                                .join('')
                                .split(' ')
                                .map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

        return(
            <div className="movieLayout" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <div className="posterContainer" 
                        style={{backgroundImage: `url(${this.props.poster})`}}>
                </div>
                <div className="movieData">
                    <div className="movieTitle">{formattedTitle}</div>
                    <hr/>
                    <p><FontAwesomeIcon className="dataIcon" icon="calendar"/><span>Year: </span> {this.props.year} | 
                       <FontAwesomeIcon className="dataIcon" icon="stopwatch"/><span>Runtime: </span> {this.props.runtime}</p>
                    <p><span>Genre:</span>
                    <br/>{this.props.genre}</p>
                    <p><span>Director: </span>
                    <br/>{this.props.director}</p>
                </div>
                <MovieButtons 
                    clickedEdit = {this.props.formOpen}
                    clickedDelete = {this.props.deleteMovie}
                    displayMode= {this.state.isHovering ? 'unset': 'unset'}/>
            </div>
            
        );
    }
}
export default MovieLayout;