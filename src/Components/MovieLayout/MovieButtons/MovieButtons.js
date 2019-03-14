import React from 'react';
import './MovieButtons.scss';
import '../MovieLayout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieButtons = (props) => (
   <div className="movieButtonsContainer">
       <button className="blueMovieButton" 
               onClick = {props.clickedEdit}>
               <FontAwesomeIcon className="imageIcon" icon="pen"/>Edit
               </button>
       <button className="redMovieButton" 
                onClick = {props.clickedDelete}>
                <FontAwesomeIcon className="imageIcon" icon="trash"/>Delete
                </button>
   </div> 
)


export default MovieButtons;