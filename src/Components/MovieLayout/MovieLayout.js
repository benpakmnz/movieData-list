import React, { Component } from 'react';
import './MovieLayout.scss';
import MovieButtons from './MovieButtons/MovieButtons';


class MovieLayout extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
       }
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
        return(
            <div className="movieLayout"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}>
            
                <div className="posterContainer" 
                        style={{backgroundImage: "url('https://cdn.europosters.eu/image/750/posters/justice-league-superman-i51000.jpg')"}}>
                </div>
                <div className="movieData">
                    <div class="movieTitle">Dog Day Afternoon</div>
                    <hr/>
                    <p>Year: 1975 | Runtime: 125 min</p>
                    <p><span>Genere:</span> Biography, Crime, Drama</p>
                    <p><span>Director: </span>Sidney Lumet</p>
                </div>
                <MovieButtons displayMode={this.state.isHovering ? 'unset': 'unset'}/>
            </div>
            
        );
    }
}
export default MovieLayout;